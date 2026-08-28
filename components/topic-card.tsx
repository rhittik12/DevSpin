import { Topic } from "@/lib/types";
import { Badge } from "./ui/badge";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
      <div className="mb-6">
        <Badge label={topic.domain} kind="domain" />
      </div>

      <h1 className="font-mono text-2xl leading-snug text-paper sm:text-3xl">
        {topic.title}
      </h1>
    </div>
  );
}