import { Topic } from "./types";

export const fakeTodayTopic: Topic = {
  id: "t-204",
  title: "Cache Invalidation with Redis",
  shape: "pair",
  domain: "performance",
  technology: "Redis",
  concept: "Cache Invalidation",
  covered: false,
};

export const fakeHistory: Topic[] = [
  {
    id: "t-203",
    title: "Consistent Hashing",
    shape: "single",
    domain: "distributed-systems",
    covered: true,
    coveredAt: "2026-08-20",
    blogUrl: "https://myblog.dev/consistent-hashing",
  },
  {
    id: "t-202",
    title: "Server-Side Rendering in Next.js",
    shape: "pair",
    domain: "frontend",
    technology: "Next.js",
    concept: "Server-Side Rendering",
    covered: true,
    coveredAt: "2026-08-19",
    blogUrl: "https://myblog.dev/ssr-nextjs",
  },
  {
    id: "t-201",
    title: "Building an API Gateway with Node.js",
    shape: "pair-standalone",
    domain: "backend",
    technology: "Node.js",
    concept: "API Gateway",
    covered: true,
    coveredAt: "2026-08-18",
  },
  {
    id: "t-200",
    title: "Connection Pooling in PostgreSQL",
    shape: "pair",
    domain: "database",
    technology: "PostgreSQL",
    concept: "Connection Pooling",
    covered: true,
    coveredAt: "2026-08-17",
    blogUrl: "https://myblog.dev/pg-connection-pooling",
  },
  {
    id: "t-199",
    title: "CAP Theorem",
    shape: "single",
    domain: "distributed-systems",
    covered: true,
    coveredAt: "2026-08-16",
  },
];

export const fakeAllTopics: Topic[] = [
  ...fakeHistory,
  fakeTodayTopic,
  {
    id: "t-205",
    title: "Prompt Caching",
    shape: "single",
    domain: "ai",
    covered: false,
  },
  {
    id: "t-206",
    title: "Deploying Next.js on Vercel with Environment Configuration",
    shape: "triple",
    domain: "infra",
    technology: "Next.js",
    technology2: "Vercel",
    concept: "Environment Configuration",
    covered: false,
  },
  {
    id: "t-207",
    title: "Rate Limiting with Redis",
    shape: "pair",
    domain: "performance",
    technology: "Redis",
    concept: "Rate Limiting",
    covered: false,
  },
];

export const fakeStreak = 5;
