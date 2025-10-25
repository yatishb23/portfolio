import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.codolio.com/profile?userKey=yatish", {
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

  return NextResponse.json(data.data.platformProfiles);
}
