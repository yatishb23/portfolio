import { NextResponse } from "next/server";
import valkey from "@/lib/valkey";

export async function GET() {
  try {
    // Basic timeout for the get operation
    const countPromise = valkey.get("visitor_count");
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), 2000)
    );
    
    const count = await Promise.race([countPromise, timeoutPromise]) as string | null;
    return NextResponse.json({ count: parseInt(count || "0") });
  } catch (error) {
    return NextResponse.json({ count: 0 }); // Fallback to 0 without error status for better UX
  }
}

export async function POST() {
  try {
    const incrPromise = valkey.incr("visitor_count");
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), 2000)
    );

    const newCount = await Promise.race([incrPromise, timeoutPromise]) as number;
    return NextResponse.json({ count: newCount });
  } catch (error) {
    return NextResponse.json({ count: 0 }); // Fallback
  }
}
