import { NextResponse } from "next/server";

export async function GET(res: Response) {
  const response = await fetch("https://api.codolio.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.ToKEN}`,
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
