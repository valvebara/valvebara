import { readConfig } from "@/lib/config";
import { limitAll } from "@/lib/hf-endpoints";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const { name, token } = await readConfig();
  if (!name || !token) {
    console.error("missing name or token");
    return NextResponse.json(
      { message: "missing name or token" },
      { status: 400 }
    );
  }
  try {
    const endpoints = await limitAll(name, token);
    console.log("endpoints limited:", endpoints);
    return NextResponse.json(
      { message: "success limiting all endpoints" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
