"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-mode-toggle";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between">
      {theme === "light" ? (
        <img
          className="mt-4 h-14"
          src="/images/valvebara-logo.png"
          alt="Valvebara Logo"
        />
      ) : (
        <img
          className="mt-4 h-14"
          src="/images/valvebara-logo.png"
          alt="Valvebara Logo"
        />
      )}
      <div className="flex gap-2 mt-8">
        <Link href="/login">
          {/* <Button className="flex w-24 h-10 px-2 py-4 justify-center items-center flex-shrink-0 text-white text-base hover:text-[#ffffff84] font-medium"> */}
          <Button className="w-24 h-10 px-2 py-4" variant="ghost" size="lg">
            Log In
          </Button>
        </Link>
        <Link href="/signup">
          <Button
            className="flex w-24 h-10 px-2 py-4 justify-center items-center flex-shrink-0 bg-[#6d28d9] rounded-[16px] text-white text-base font-medium transition-colors hover:bg-[#6c28d983]"
            size="lg"
          >
            Sign Up
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
