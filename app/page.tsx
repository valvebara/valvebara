import React from "react";
import "./globals.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Confetti from "@/components/confetti";

export default function CardWithForm() {
  const configReady: boolean =
    typeof process.env.HF_TOKEN !== "undefined" &&
    typeof process.env.HF_NAME !== "undefined";
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-auto z-10">
        <CardHeader>
          <CardTitle>Valve</CardTitle>
          <CardDescription>
            No more{" "}
            <Link
              href="https://hf.co"
              target="_blank"
              className="text-blue-500"
            >
              Hugging Face
            </Link>{" "}
            cost leaks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {configReady ? (
            <div className="flex items-center justify-center">
              <span className="text-2xl">🎉 All Set</span>
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
                in vercel project setting
              </span>
            </div>
          )}
        </CardContent>
      </Card>
      {configReady && <Confetti />}
    </div>
  );
}

function express() {
  throw new Error("Function not implemented.");
}
