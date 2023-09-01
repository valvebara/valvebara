import React from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CardWithForm() {
  const configReady: boolean =
    typeof process.env.HF_TOKEN !== "undefined" &&
    typeof process.env.HF_NAME !== "undefined";
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Valve</CardTitle>
          <CardDescription>Safeguard your money in one-click</CardDescription>
        </CardHeader>
        <CardContent>
          {
            // if config is ready, show a All Set message with emoji
            // else show a red warning message to remind user to set config
            configReady ? (
              <div className="flex items-center justify-center">
                <span className="text-2xl">✅ All Set</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
                <span className="ml-2">
                  Please add <code>HF_TOKEN</code> and <code>HF_NAME</code> to{" "}
                  <Link
                    href="https://vercel.com/docs/projects/environment-variables"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Environment Variables
                  </Link>{" "}
                  in
                  vercel project setting
                </span>
              </div>
            )
          }
        </CardContent>
      </Card>
    </div>
  );
}

function express() {
  throw new Error("Function not implemented.");
}
