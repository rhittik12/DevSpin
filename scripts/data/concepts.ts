import type { TopicDomain } from "@/lib/types";

export const concepts: { name: string; domain: TopicDomain }[] = [
  // Frontend
  { name: "Component-Based Architecture", domain: "frontend" },
  { name: "Server-Side Rendering", domain: "frontend" },
  { name: "Client-Side Rendering", domain: "frontend" },
  { name: "Static Site Generation", domain: "frontend" },
  { name: "Incremental Static Regeneration", domain: "frontend" },
  { name: "State Management", domain: "frontend" },
  { name: "CSS-in-JS", domain: "frontend" },
  { name: "Content Modeling", domain: "frontend" },

  // Backend
  { name: "Middleware", domain: "backend" },
  { name: "API Versioning", domain: "backend" },
  { name: "Request Validation", domain: "backend" },
  { name: "Error Handling", domain: "backend" },
  { name: "Webhooks", domain: "backend" },
  { name: "Server-Sent Events", domain: "backend" },

  // Database
  { name: "Database Indexing", domain: "database" },
  { name: "Database Transactions", domain: "database" },
  { name: "Database Normalization", domain: "database" },
  { name: "Connection Pooling", domain: "database" },
  { name: "Database Query Optimization", domain: "database" },

  // Infra
  { name: "Load Balancing", domain: "infra" },
  { name: "Horizontal Scaling", domain: "infra" },
  { name: "Continuous Integration", domain: "infra" },
  { name: "Continuous Deployment", domain: "infra" },
  { name: "Infrastructure as Code", domain: "infra" },
  { name: "Environment Configuration", domain: "infra" },
  { name: "Rollback Strategies", domain: "infra" },
  { name: "Feature Flags", domain: "infra" },

  // Security
  { name: "Session-Based Auth", domain: "security" },
  { name: "Passwordless Auth", domain: "security" },
  { name: "CORS", domain: "security" },
  { name: "Content Security Policy", domain: "security" },
  { name: "Rate Limiting", domain: "security" },
  { name: "API Key Management", domain: "security" },
  { name: "Encryption at Rest", domain: "security" },
  { name: "Encryption in Transit", domain: "security" },
  { name: "Secrets Management", domain: "security" },

  // Testing
  { name: "Unit Testing", domain: "testing" },
  { name: "Integration Testing", domain: "testing" },
  { name: "End-to-End Testing", domain: "testing" },
  { name: "Mocking", domain: "testing" },
  { name: "Test Coverage", domain: "testing" },
  { name: "Snapshot Testing", domain: "testing" },
  { name: "Load Testing", domain: "testing" },

  // DevEx
  { name: "Linting", domain: "devex" },
  { name: "Git Branching Strategies", domain: "devex" },
  { name: "Monorepo Tooling", domain: "devex" },
  { name: "Module Bundling", domain: "devex" },
  { name: "Tree Shaking", domain: "devex" },
  { name: "Hot Module Reloading", domain: "devex" },
  { name: "Code Review Practices", domain: "devex" },

  // Distributed systems
  { name: "Message Queues", domain: "distributed-systems" },
  { name: "Dead Letter Queues", domain: "distributed-systems" },
  { name: "Data Replication Strategies", domain: "distributed-systems" },
  { name: "Distributed Caching", domain: "distributed-systems" },
  { name: "API Rate Limiting", domain: "distributed-systems" },

  // Networking
  { name: "Long Polling", domain: "networking" },
  { name: "HTTP Caching Headers", domain: "networking" },
  { name: "Network Latency Optimization", domain: "networking" },
  { name: "gRPC over HTTP/2", domain: "networking" },

  // Observability
  { name: "Logging", domain: "observability" },
  { name: "Structured Logging", domain: "observability" },
  { name: "Metrics", domain: "observability" },
  { name: "APM", domain: "observability" },
  { name: "Health Checks", domain: "observability" },
  { name: "Alerting Strategies", domain: "observability" },

  // Data
  { name: "Batch Processing", domain: "data" },
  { name: "Stream Processing", domain: "data" },
  { name: "Data Modeling", domain: "data" },

  // AI
  { name: "Embeddings", domain: "ai" },
  { name: "Fine-Tuning", domain: "ai" },
  { name: "Model Evaluation Metrics", domain: "ai" },
  { name: "Prompt Engineering", domain: "ai" },
  { name: "Function Calling / Tool Use", domain: "ai" },
  { name: "Context Windows", domain: "ai" },
  { name: "Tokenization", domain: "ai" },
  { name: "Fine-Tuning LLMs", domain: "ai" },
  { name: "Model Quantization", domain: "ai" },
  { name: "Hallucination Mitigation", domain: "ai" },
  { name: "AI Guardrails", domain: "ai" },
  { name: "AI Observability", domain: "ai" },
  { name: "Prompt Caching", domain: "ai" },
  { name: "Semantic Search", domain: "ai" },

  // Mobile
  { name: "Mobile-First Design", domain: "mobile" },
  { name: "App Store Deployment", domain: "mobile" },
  { name: "Push Notifications", domain: "mobile" },

  // Search
  { name: "Full-Text Search", domain: "search" },
  { name: "Fuzzy Search", domain: "search" },
  { name: "Search Ranking", domain: "search" },
  { name: "Faceted Search", domain: "search" },

  // Blockchain
  { name: "Wallets", domain: "blockchain" },
];