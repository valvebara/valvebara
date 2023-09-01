// api/huggingface.js

import { NextRequest } from "next/server";
import { writeConfig } from "@/hf_valve/lib/config";

export async function POST(req: NextRequest) {
  try {
    const { name, token } = (await req.json()) as {
      name: string;
      token: string;
    };
    if (!name || !token) {
      return new Response("missing name or token", {
        status: 400,
      });
    }
    await writeConfig({ name, token });
    return new Response("success limiting all endpoints", {
      status: 200,
    });
  } catch (error) {
    console.error("Error saving config:", error);
    return new Response(error.message, {
      status: 500,
    });
  }
}
