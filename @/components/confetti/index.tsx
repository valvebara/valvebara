"use client";

import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const c = confetti.create(ref.current, {
        resize: true,
        useWorker: true,
      });
      c({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });
    }
  }, []);
  return <canvas ref={ref} className="fixed w-full h-full z-0" />;
}
