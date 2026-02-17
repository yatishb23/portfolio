import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    const cacheKey = "profileData";
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

    const response = await fetch("https://api.codolio.com/profile?userKey=scrapper", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { error: data.errors[0].message },
        { status: 500 }
      );
    }

    const platformProfiles = data.data.platformProfiles;

    await redis.set(cacheKey, JSON.stringify(platformProfiles), {
      EX: 3600,
    });

    return NextResponse.json(platformProfiles);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
