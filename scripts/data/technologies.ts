import type { TopicDomain } from "@/lib/types";

export const techTopics: { name: string; domain: TopicDomain }[] = [
    { name: "React", domain: "frontend" },
    { name: "Next.js", domain: "frontend" },
    { name: "Tailwind CSS", domain: "frontend" },

    { name: "Node.js", domain: "backend" },
    { name: "Express", domain: "backend" },
    { name: "GraphQL", domain: "backend" },
    { name: "REST", domain: "backend" },

    { name: "PostgreSQL", domain: "database" },
    { name: "MongoDB", domain: "database" },
    { name: "Redis", domain: "database" },
    { name: "Drizzle ORM", domain: "database" },

    { name: "Vercel", domain: "infra" },
    { name: "AWS", domain: "infra" },
    { name: "Docker", domain: "infra" },
    { name: "Kubernetes", domain: "infra" },
    { name: "GitHub Actions", domain: "infra" },

    { name: "Unit Testing", domain: "testing" },
    { name: "Integration Testing", domain: "testing" },
    { name: "Jest", domain: "testing" },
    { name: "Playwright", domain: "testing" },
]