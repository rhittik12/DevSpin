import { Topic } from "@/lib/types";
import { Badge } from "./ui/badge";

interface HistoryTableProps {
  topics: Topic[];
}

export function HistoryTable({ topics }: HistoryTableProps) {
  if (topics.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="font-mono text-sm text-muted">
          Nothing logged yet. Spin a topic and mark it covered to start your streak.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-line bg-surface">
            <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted">Date</th>
            <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted">Topic</th>
            <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted">Domain</th>
            <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted">Post</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic) => (
            <tr key={topic.id} className="border-b border-line last:border-0">
              <td className="px-5 py-4 font-mono text-sm text-muted">{topic.coveredAt}</td>
              <td className="px-5 py-4 font-mono text-sm text-paper">{topic.title}</td>
              <td className="px-5 py-4">
                <Badge label={topic.domain} kind="domain" />
              </td>
              <td className="px-5 py-4">
                {topic.blogUrl ? (
                  <a
                    href={topic.blogUrl}
                    className="font-mono text-sm text-copper hover:underline"
                    target="_blank"
                  >
                    Read →
                  </a>
                ) : (
                  <span className="font-mono text-sm text-muted">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
