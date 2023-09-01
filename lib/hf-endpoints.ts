const pathBase = "https://ui.endpoints.huggingface.co/api/v2/endpoint/";

async function limitOne(endpointPath, token) {
  try {
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
    console.log("this endpoint is limited");
    const data = await response.json();
    console.log(data.name);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function limitAll(
  name,
  token
): Promise<Array<string> | undefined> {
  try {
    const data =
      ((await getEndpoints(name, token)) as {
        items: Array<{ name: string }>;
      }) || undefined;
    if (typeof data?.items !== "object") {
      return;
    }
    const endpoints = data.items.map(
      (endpoint) => pathBase + name + "/" + endpoint.name
    );
    for (const path of endpoints) {
      await limitOne(path, token);
    }
    return endpoints;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getEndpoints(org: string, token: string) {
  const path = pathBase + `${org}`;
  const response = await fetch(path, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error fetching endpoints");
  }
  const data = await response.json();
  console.log("got AllEndpoints");
  return data;
}
