import { NextRequest, NextResponse } from "next/server";

const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";

const query = `
query userProfileCalendar($username: String!, $year: Int) {
  matchedUser(username: $username) {
    userCalendar(year: $year) {
      activeYears
      streak
      totalActiveDays
      dccBadges {
        timestamp
        badge {
          name
          icon
        }
      }
      submissionCalendar
    }
  }
}
`;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const year = searchParams.get("year");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  const selectedYear = year ? parseInt(year) : new Date().getFullYear();

  const response = await fetch(LEETCODE_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username, year: selectedYear },
    }),
  });

  
  
  const data = await response.json();

  if (data.errors) {
    return NextResponse.json({ error: data.errors[0].message }, { status: 500 });
  }

  return NextResponse.json(data.data.matchedUser.userCalendar);
}