"use client";

import { useState } from "react";
import { TopicCard } from "@/components/topic-card";
import { SpinButton } from "@/components/spin-button";
import { Button } from "@/components/ui/button";
import { fakeTodayTopic, fakeStreak } from "@/lib/fake-data";
import { Topic } from "@/lib/types";

export default function HomePage() {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [blogUrl, setBlogUrl] = useState("");
  const [covered, setCovered] = useState(false);

  // Placeholder for the real server action call: await spinTopic()
  const handleSpin = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setTopic(fakeTodayTopic);
  };

  // Placeholder for the real server action call: await markCovered(topic.id, blogUrl)
  const handleMarkCovered = () => {
    setCovered(true);
    setShowLinkInput(false);
  };

  return (
    <div className="flex flex-col gap-8 pt-8">
      <div className="flex items-center justify-between">
        <p className="font-mono text-sm text-muted">Today's crossing</p>
        <p className="font-mono text-sm text-copper">{fakeStreak} day streak</p>
      </div>

      {topic ? (
        <>
          <TopicCard topic={topic} />

          {!covered ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="primary" onClick={() => setShowLinkInput(true)}>
                Mark as blogged
              </Button>
              <Button variant="ghost" onClick={handleSpin}>
                Skip, spin another
              </Button>
            </div>
          ) : (
            <p className="font-mono text-sm text-thread">Logged. See you tomorrow.</p>
          )}

          {showLinkInput && !covered && (
            <div className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-5 sm:flex-row sm:items-center">
              <input
                type="url"
                placeholder="Paste your blog post URL (optional)"
                value={blogUrl}
                onChange={(e) => setBlogUrl(e.target.value)}
                className="flex-1 rounded-md border border-line bg-ink px-4 py-2 font-mono text-sm text-paper placeholder:text-muted focus:border-copper"
              />
              <Button onClick={handleMarkCovered}>Save</Button>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-line p-12 text-center">
          <p className="mb-6 font-mono text-sm text-muted">
            No topic spun yet today.
          </p>
          <SpinButton onSpin={handleSpin} />
        </div>
      )}
    </div>
  );
}
