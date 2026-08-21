"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface SpinButtonProps {
  onSpin: () => Promise<void>;
}

export function SpinButton({ onSpin }: SpinButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onSpin();
    setLoading(false);
  };

  return (
    <Button onClick={handleClick} disabled={loading} className="w-full sm:w-auto">
      {loading ? "Spinning..." : "Spin today's topic"}
    </Button>
  );
}
