"use client";

import React, { useState } from "react";
import "./globals.css";
import RootLayout, { metadata } from "./layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

require("dotenv").config();

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
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function limitAll(org, token) {
  const data = await getEndpoints(`${org}`, `${token}`);
  data.items.map((endpoint) => {
    limitOne(pathBase + `${org}` + "/" + endpoint.name, `${token}`);
  });

  console.log("limit all endpoints");
}

function executeAndSleep(org, token) {
  if (!org) {
    console.log("please provide an org name as an argument");
    return;
  } else {
    limitAll(`${org}`, `${token}`);
    const interval = 15 * 60 * 1000; // 15 minutes
    setInterval(() => {
      limitAll(`${org}`, `${token}`);
    }, interval);
  }
}

export default function CardWithForm() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Valve</CardTitle>
          <CardDescription>Safeguard your money in one-click</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="organization name or username"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Token</Label>
                <Input
                  id="token"
                  placeholder="huggingface token"
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Stop</Button>
          <Button onClick={() => executeAndSleep(name, token)}>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
