import { NextResponse } from "next/server";

const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";

const query = `
query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
            name
        }
    }
    userContestRankingHistory(username: $username) {
        attended
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        rating
        ranking
        contest {
            title
            startTime
        }
    }
}
`;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    const year = searchParams.get("year");
  
    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }
  
    // Default to current year if no year is provided
    const selectedYear = year ? parseInt(year) : new Date().getFullYear();
  
    const response = await fetch(LEETCODE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });
  
    
    
    const data = await response.json();
    console.log(data.data.userContestRanking);
    
    return NextResponse.json(data.data.userContestRanking);
  }