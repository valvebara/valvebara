// api/huggingface.js

import { NextRequest } from "next/server";

const pathBase = "https://ui.endpoints.huggingface.co/api/v2/endpoint/";

async function limitOne(endpointPath, token) {
  try {
    console.log(endpointPath);
    const response = await fetch(endpointPath, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        compute: { scaling: { minReplica: 0, maxReplica: 1 } },
      }),
    });
    console.log("endpoint limited");
    const data = await response.json();
    console.log(data.name);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getEndpoints(org, token) {
  try {
    const path = pathBase + `${org}`;
    console.log("getEndpoints:", path);
    const response = await fetch(path, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("got AllEndpoints");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const name = searchParams.get("name") || ""; // Get the 'name' query parameter
  const token = searchParams.get("token") || ""; // Get the 'token' query parameter
  console.log(name);
  console.log(token);

  const data = await getEndpoints(name, token);
  console.log("endpoints:", data);
  if (data) {
    data.items.map((endpoint) => {
      limitOne(pathBase + name + "/" + endpoint.name, token);
    });
  }

  console.log("successfully limited all endpoints");
}
