"use client";

import { limitOne, getEndpoints } from "./api/home/route";
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

export default function CardWithForm() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const handleDeployClick = async () => {
    if (!name || !token) {
      console.log("name: ", name, "token: ", token);
      console.log("Please provide both name and token");
      return;
    }

    try {
      const response = await fetch(`/api/home?name=${name}&token=${token}`, {
        method: "GET",
      });
      if (response.ok) {
        console.log("Endpoints limited successfully");
      } else {
        console.error("Failed to limit endpoints");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <Button onClick={() => handleDeployClick()}>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
function express() {
  throw new Error("Function not implemented.");
}
