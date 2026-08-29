import type { TopicDomain } from "@/lib/types";

export const domainCrossingRules: Partial<Record<TopicDomain, TopicDomain[]>> = {
  frontend: ["frontend"],
  backend: ["backend", "database", "distributed-systems"],
  database: ["database", "backend", "performance"],
  infra: ["infra", "security"],
  security: ["security", "infra", "backend"],
  performance: ["performance", "database", "frontend", "networking"],
  "distributed-systems": ["distributed-systems", "backend", "networking"],
  networking: ["networking", "distributed-systems", "performance"],
  observability: ["observability", "infra", "backend"],
  testing: ["testing"],
  devex: ["devex"],
  data: ["data", "database"],
  ai: ["ai"],
  mobile: ["mobile", "frontend"],
  search: ["search", "database"],
  blockchain: ["blockchain"],
  // architecture and general are standalone-heavy and intentionally omitted —
  // they never cross with anything, only used via standaloneTopics.
};