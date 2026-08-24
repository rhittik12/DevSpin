import type { TopicDomain } from "@/lib/types";

export const concepts: { name: string; domain: TopicDomain }[] = [
    { name: "Component-Based Architecture", domain: "frontend" },
    { name: "Server-Side Rendering", domain: "frontend" },
    { name: "Client-Side Rendering", domain: "frontend" },
    { name: "State Management", domain: "frontend" },

    { name: "Middleware", domain: "backend" },
    { name: "API Versioning", domain: "backend" },
    { name: "Request Validation", domain: "backend" },
    { name: "Error Handling", domain: "backend" },

    { name: "Database Indexing", domain: "database" },
    { name: "Database Transactions", domain: "database" },
    { name: "Database Normalization", domain: "database" },
    { name: "Connection Pooling", domain: "database" },

    { name: "Load Balancing", domain: "infra" },
    { name: "Horizontal Scaling", domain: "infra" },
    { name: "Continuous Integration", domain: "infra" },
    { name: "Infrastructure as Code", domain: "infra" },

    { name: "Unit Testing", domain: "testing" },
    { name: "Integration Testing", domain: "testing" },
    { name: "End-to-End Testing", domain: "testing" },
    { name: "Mocking", domain: "testing" },
];
