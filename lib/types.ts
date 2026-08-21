export type TopicShape = "single" | "pair" | "pair-standalone" | "triple" | "curated";

export type TopicDomain =
  | "frontend" | "backend" | "database" | "infra" | "security"
  | "performance" | "distributed-systems" | "networking" | "observability"
  | "testing" | "devex" | "data" | "ai" | "mobile" | "search"
  | "architecture" | "blockchain" | "general";

export interface Topic {
  id: string;
  title: string;
  shape: TopicShape;
  domain: TopicDomain;
  technology?: string;
  technology2?: string;
  concept?: string;
  covered: boolean;
  coveredAt?: string;
  blogUrl?: string;
}
