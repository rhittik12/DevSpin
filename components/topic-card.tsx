import { Topic } from "@/lib/types";
import { Badge } from "./ui/badge";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const hasCross = topic.technology && (topic.concept || topic.technology2);

  return (
    <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
      <div className="mb-6 flex items-center justify-between">
        <Badge label={topic.domain} kind="domain" />
        <span className="font-mono text-xs text-muted">#{topic.id.replace("t-", "")}</span>
      </div>

      {hasCross ? (
        <div className="mb-8 flex flex-wrap items-center gap-4 sm:gap-6">
          <Badge label={topic.technology!} kind="technology" />
          <span className="font-mono text-2xl text-muted sm:text-3xl">×</span>
          <Badge
            label={topic.technology2 ?? topic.concept!}
            kind={topic.technology2 ? "technology" : "concept"}
          />
          {topic.technology2 && topic.concept && (
            <>
              <span className="font-mono text-2xl text-muted sm:text-3xl">×</span>
              <Badge label={topic.concept} kind="concept" />
            </>
          )}
        </div>
      ) : (
        <div className="mb-8">
          <Badge label="standalone" kind="concept" />
        </div>
      )}

      <h1 className="font-mono text-2xl leading-snug text-paper sm:text-3xl">
        {topic.title}
      </h1>
    </div>
  );
}
