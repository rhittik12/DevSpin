import type { TopicDomain } from "@/lib/types";

export const standaloneTopics: { name: string; domain: TopicDomain }[] = [
    { name: "CAP Theorem", domain: "distributed-systems" },
    { name: "Load Balancing", domain: "distributed-systems" },
    { name: "Horizontal vs Vertical Scaling", domain: "distributed-systems" },
    { name: "Database Sharding", domain: "database" },
    { name: "Database Replication", domain: "database" },

    { name: "OAuth 2.0", domain: "security" },
    { name: "OpenID Connect", domain: "security" },
    { name: "SSO", domain: "security" },
    { name: "Multi-Factor Authentication", domain: "security" },
    { name: "RBAC", domain: "security" },

    { name: "Microservices", domain: "architecture" },
    { name: "Monolithic Architecture", domain: "architecture" },
    { name: "Modular Monolith", domain: "architecture" },
    { name: "Serverless Architecture", domain: "architecture" },
    { name: "Domain-Driven Design", domain: "architecture" },

    { name: "SOLID Principles", domain: "general" },
    { name: "Race Conditions", domain: "general" },
    { name: "Deadlocks", domain: "general" },
    { name: "Concurrency", domain: "general" },
    { name: "Multithreading", domain: "general" },
]