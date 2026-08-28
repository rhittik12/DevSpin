"use client";

import { useState } from "react";
import { TopicCard } from "@/components/topic-card";
import { SpinButton } from "@/components/spin-button";
import { Topic } from "@/lib/types";
import { spinTopic } from "./actions/spin";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [topic, setTopic] = useState<Topic | null>(null);

  const handleSpin = async () => {
    const newTopic = await spinTopic();
    setTopic(newTopic);
  };

  return (
    <div className="flex flex-col gap-8 pt-8">
      <div className="flex items-center justify-between">
        <p className="font-mono text-sm text-muted">Today's crossing</p>
      </div>

      {topic ? (
        <>
          <TopicCard topic={topic} />
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="ghost" onClick={handleSpin}>
              Skip, spin another
            </Button>
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-line p-12 text-center">
          <SpinButton onSpin={handleSpin} />
        </div>
      )}
    </div>
  );
}
