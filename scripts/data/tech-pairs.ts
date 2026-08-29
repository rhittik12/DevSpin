import type { TopicDomain } from "@/lib/types";

export const techPairs: { tech1: string; tech2: string; domain: TopicDomain }[] = [
  { tech1: "Next.js", tech2: "Vercel", domain: "infra" },
  { tech1: "Redis", tech2: "Node.js", domain: "backend" },
  { tech1: "Docker", tech2: "Kubernetes", domain: "infra" },
  { tech1: "PostgreSQL", tech2: "Drizzle ORM", domain: "database" },
  { tech1: "Next.js", tech2: "tRPC", domain: "backend" },
  { tech1: "React", tech2: "Tailwind CSS", domain: "frontend" },
  { tech1: "Node.js", tech2: "Express", domain: "backend" },
  { tech1: "Kafka", tech2: "Node.js", domain: "distributed-systems" },
  { tech1: "Docker", tech2: "GitHub Actions", domain: "infra" },
  { tech1: "PostgreSQL", tech2: "Redis", domain: "database" },
  { tech1: "Next.js", tech2: "Supabase", domain: "database" },
  { tech1: "Node.js", tech2: "PostgreSQL", domain: "database" },
];