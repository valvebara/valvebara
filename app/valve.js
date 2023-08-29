require("dotenv").config();

const pathBase = "https://ui.endpoints.huggingface.co/api/v2/endpoint/";

async function limitOne(endpointPath) {
  try {
    console.log(endpointPath);
    const response = await fetch(endpointPath, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
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

async function getEndpoints(org) {
  try {
    const path = pathBase + `${org}`;
    console.log("getEndpoints:", path);
    const response = await fetch(path, {
      method: "GET",
      headers: {
        authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function limitAll(org) {
  const data = await getEndpoints(`${org}`);
  data.items.map((endpoint) => {
    limitOne(pathBase + `${org}` + "/" + endpoint.name);
  });

  console.log("limit all endpoints");
}

function executeAndSleep(org) {
  if (!org) {
    console.log("please provide an org name as an argument");
    return;
  } else {
    limitAll(`${org}`);
    const interval = 15 * 60 * 1000; // 15 minutes
    setInterval(() => {
      limitAll(process.argv[2]);
    }, interval);
  }
}

executeAndSleep(process.argv[2]);
