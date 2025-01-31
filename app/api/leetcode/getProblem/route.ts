import { NextResponse } from "next/server";

const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";

const query = `
query userProfileUserQuestionProgressV2($userSlug: String!) {
  userProfileUserQuestionProgressV2(userSlug: $userSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
    totalQuestionBeatsPercentage
  }
}
`;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userSlug = searchParams.get("username");

    if (!userSlug) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { userSlug },
      }),
    });

    const data = await response.json();

    if (!response.ok || data.errors) {
      return NextResponse.json(
        { error: data.errors?.[0]?.message || "Failed to fetch data" },
        { status: 500 }
      );
    }

    
    return NextResponse.json(data.data.userProfileUserQuestionProgressV2);
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
