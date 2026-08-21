import { HistoryTable } from "@/components/history-table";
import { fakeHistory } from "@/lib/fake-data";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-6 pt-8">
      <div>
        <h1 className="font-mono text-2xl text-paper">History</h1>
        <p className="mt-1 font-mono text-sm text-muted">
          {fakeHistory.length} topics covered so far
        </p>
      </div>
      <HistoryTable topics={fakeHistory} />
    </div>
  );
}
