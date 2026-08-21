"use client";

import { useMemo, useState } from "react";
import { fakeAllTopics } from "@/lib/fake-data";
import { Badge } from "@/components/ui/badge";

export default function AllTopicsPage() {
  const [query, setQuery] = useState("");
  const [showCoveredOnly, setShowCoveredOnly] = useState<"all" | "covered" | "uncovered">("all");

  const filtered = useMemo(() => {
    return fakeAllTopics.filter((t) => {
      const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
      const matchesStatus =
        showCoveredOnly === "all" ||
        (showCoveredOnly === "covered" && t.covered) ||
        (showCoveredOnly === "uncovered" && !t.covered);
      return matchesQuery && matchesStatus;
    });
  }, [query, showCoveredOnly]);

  return (
    <div className="flex flex-col gap-6 pt-8">
      <div>
        <h1 className="font-mono text-2xl text-paper">Browse topic bank</h1>
        <p className="mt-1 font-mono text-sm text-muted">
          {fakeAllTopics.length} topics total
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-md border border-line bg-surface px-4 py-2 font-mono text-sm text-paper placeholder:text-muted focus:border-copper"
        />
        <div className="flex gap-2">
          {(["all", "uncovered", "covered"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setShowCoveredOnly(status)}
              className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                showCoveredOnly === status
                  ? "border-copper text-copper"
                  : "border-line text-muted hover:text-paper"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col divide-y divide-line rounded-2xl border border-line">
        {filtered.length === 0 ? (
          <p className="p-8 text-center font-mono text-sm text-muted">
            No topics match that search.
          </p>
        ) : (
          filtered.map((topic) => (
            <div
              key={topic.id}
              className="flex items-center justify-between gap-4 p-5 hover:bg-surface"
            >
              <div>
                <p className="font-mono text-sm text-paper">{topic.title}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {topic.covered ? `Covered ${topic.coveredAt}` : "Not covered yet"}
                </p>
              </div>
              <Badge label={topic.domain} kind="domain" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
