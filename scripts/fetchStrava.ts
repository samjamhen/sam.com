// scripts/fetchStrava.ts
import { promises as fs } from "node:fs";
import path from "node:path";

type StravaActivity = {
  id: number;
  name: string;
  type: string; // "Run", "Ride", etc.
  start_date_local: string;
  distance: number; // meters
  moving_time: number; // seconds
  total_elevation_gain?: number;
};

type StravaTokenResponse = {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: "Bearer";
};

const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;

if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
  console.error(
    "Missing env vars. Set STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN."
  );
  process.exit(1);
}

async function refreshAccessToken(): Promise<StravaTokenResponse> {
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: STRAVA_CLIENT_ID!,
      client_secret: STRAVA_CLIENT_SECRET!,
      refresh_token: STRAVA_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Token refresh failed: ${res.status} ${txt}`);
  }

  return (await res.json()) as StravaTokenResponse;
}

function toSummaryRun(a: StravaActivity) {
  const distanceKm = a.distance / 1000;
  const movingMin = a.moving_time / 60;

  return {
    id: a.id,
    name: a.name,
    date: a.start_date_local,
    distance_km: Number(distanceKm.toFixed(2)),
    moving_time_min: Math.round(movingMin),
    pace_min_per_km:
      a.type === "Run" && distanceKm > 0
        ? Number((movingMin / distanceKm).toFixed(2))
        : null,
    elev_gain_m: Math.round(a.total_elevation_gain ?? 0),
  };
}

async function fetchActivities(accessToken: string): Promise<StravaActivity[]> {
  const perPage = 50;
  const page = 1;

  const res = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}&page=${page}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Activities fetch failed: ${res.status} ${txt}`);
  }

  return (await res.json()) as StravaActivity[];
}

async function main() {
  const token = await refreshAccessToken();
  const activities = await fetchActivities(token.access_token);

  // Only keep Runs
  const runs = activities
    .filter((a) => a.type === "Run")
    .map(toSummaryRun);

  const out = {
    updated_at: new Date().toISOString(),
    count: runs.length,
    runs,
  };

  // Vite serves files from /public at the site root (BASE_URL is applied at fetch time)
  const publicDir = path.join(process.cwd(), "public");
  await fs.mkdir(publicDir, { recursive: true });

  const outPath = path.join(publicDir, "strava.json");
  await fs.writeFile(outPath, JSON.stringify(out, null, 2), "utf8");

  console.log(`✅ Wrote ${outPath} with ${runs.length} runs`);
}

main().catch((err) => {
  console.error("❌", err);
  process.exit(1);
});
