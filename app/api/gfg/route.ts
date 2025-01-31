import { NextResponse } from "next/server";

export async function GET(req:Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const apiUrl = `https://practiceapi.geeksforgeeks.org/api/v1/user/problems/submissions/`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch GeeksforGeeks data");
    }

    const data = await response.json();

    const problemSolved = data.total_problems_solved || 0;

    return NextResponse.json({ username, problemSolved }, { status: 200 });
  } catch (error:any) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({ error: "Failed to fetch GeeksforGeeks data" }, { status: 500 });
  }
}
