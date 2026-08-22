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

export const fakeAllTopics: Topic[] = [
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
