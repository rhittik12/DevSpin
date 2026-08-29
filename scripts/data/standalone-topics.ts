import type { TopicDomain } from "@/lib/types";

export const standaloneTopics: { name: string; domain: TopicDomain }[] = [
  // Distributed systems
  { name: "CAP Theorem", domain: "distributed-systems" },
  { name: "Load Balancing", domain: "distributed-systems" },
  { name: "Horizontal vs Vertical Scaling", domain: "distributed-systems" },
  { name: "Consistent Hashing", domain: "distributed-systems" },
  { name: "Eventual Consistency", domain: "distributed-systems" },
  { name: "Strong Consistency", domain: "distributed-systems" },
  { name: "Leader Election", domain: "distributed-systems" },
  { name: "Quorum Consensus", domain: "distributed-systems" },
  { name: "Paxos", domain: "distributed-systems" },
  { name: "Raft Consensus Algorithm", domain: "distributed-systems" },
  { name: "Idempotency", domain: "distributed-systems" },
  { name: "Backpressure", domain: "distributed-systems" },
  { name: "Circuit Breaker Pattern", domain: "distributed-systems" },
  { name: "Bulkhead Pattern", domain: "distributed-systems" },
  { name: "Rate Limiting Algorithms", domain: "distributed-systems" },
  { name: "Service Discovery", domain: "distributed-systems" },
  { name: "Distributed Transactions", domain: "distributed-systems" },
  { name: "Two-Phase Commit", domain: "distributed-systems" },
  { name: "Saga Pattern", domain: "distributed-systems" },
  { name: "Distributed Locking", domain: "distributed-systems" },
  { name: "Clock Synchronization", domain: "distributed-systems" },
  { name: "Vector Clocks", domain: "distributed-systems" },
  { name: "Gossip Protocol", domain: "distributed-systems" },
  { name: "Byzantine Fault Tolerance", domain: "distributed-systems" },
  { name: "Partition Tolerance", domain: "distributed-systems" },
  { name: "Distributed Tracing", domain: "distributed-systems" },
  { name: "Event-Driven Architecture", domain: "distributed-systems" },
  { name: "Pub/Sub Pattern", domain: "distributed-systems" },
  { name: "Event Sourcing", domain: "distributed-systems" },
  { name: "CQRS", domain: "distributed-systems" },

  // Database
  { name: "Database Sharding", domain: "database" },
  { name: "Database Replication", domain: "database" },
  { name: "N+1 Query Problem", domain: "database" },

  // Security
  { name: "OAuth 2.0", domain: "security" },
  { name: "OpenID Connect", domain: "security" },
  { name: "SSO", domain: "security" },
  { name: "Multi-Factor Authentication", domain: "security" },
  { name: "RBAC", domain: "security" },
  { name: "ABAC", domain: "security" },
  { name: "CSRF", domain: "security" },
  { name: "XSS", domain: "security" },
  { name: "SQL Injection", domain: "security" },
  { name: "Zero Trust Architecture", domain: "security" },

  // Architecture
  { name: "Microservices", domain: "architecture" },
  { name: "Monolithic Architecture", domain: "architecture" },
  { name: "Modular Monolith", domain: "architecture" },
  { name: "Serverless Architecture", domain: "architecture" },
  { name: "Domain-Driven Design", domain: "architecture" },
  { name: "Hexagonal Architecture", domain: "architecture" },
  { name: "Clean Architecture", domain: "architecture" },
  { name: "Layered Architecture", domain: "architecture" },
  { name: "Service Mesh", domain: "architecture" },
  { name: "Backend for Frontend (BFF)", domain: "architecture" },
  { name: "Strangler Fig Pattern", domain: "architecture" },

  // Networking
  { name: "DNS", domain: "networking" },
  { name: "TCP/IP", domain: "networking" },
  { name: "HTTP/1.1 vs HTTP/2 vs HTTP/3", domain: "networking" },
  { name: "TLS/SSL", domain: "networking" },
  { name: "Load Balancer Types (L4 vs L7)", domain: "networking" },
  { name: "CDN Architecture", domain: "networking" },
  { name: "VPN", domain: "networking" },
  { name: "Firewalls", domain: "networking" },
  { name: "NAT", domain: "networking" },
  { name: "Content Delivery Networks", domain: "networking" },
  { name: "Reverse Proxy", domain: "networking" },
  { name: "Forward Proxy", domain: "networking" },

  // Observability
  { name: "SLA/SLO/SLI", domain: "observability" },

  // Performance
  { name: "Web Vitals", domain: "performance" },
  { name: "Memory Leaks", domain: "performance" },
  { name: "Garbage Collection Concepts", domain: "performance" },
  { name: "Cache Invalidation", domain: "performance" },
  { name: "Cache-Aside Pattern", domain: "performance" },
  { name: "Write-Through Cache", domain: "performance" },
  { name: "Write-Behind Cache", domain: "performance" },

  // Backend
  { name: "API Gateway", domain: "backend" },

  // Data
  { name: "ETL Pipelines", domain: "data" },
  { name: "Data Warehousing", domain: "data" },
  { name: "Data Lakes", domain: "data" },
  { name: "OLAP vs OLTP", domain: "data" },

  // AI
  { name: "Machine Learning Fundamentals", domain: "ai" },
  { name: "Supervised Learning", domain: "ai" },
  { name: "Unsupervised Learning", domain: "ai" },
  { name: "Reinforcement Learning", domain: "ai" },
  { name: "Neural Networks", domain: "ai" },
  { name: "Deep Learning", domain: "ai" },
  { name: "Transformers", domain: "ai" },
  { name: "Attention Mechanism", domain: "ai" },
  { name: "Transfer Learning", domain: "ai" },
  { name: "Overfitting/Underfitting", domain: "ai" },
  { name: "Bias-Variance Tradeoff", domain: "ai" },
  { name: "Large Language Models", domain: "ai" },
  { name: "RAG (Retrieval-Augmented Generation)", domain: "ai" },
  { name: "AI Agents", domain: "ai" },
  { name: "Multi-Agent Systems", domain: "ai" },
  { name: "Model Context Protocol (MCP)", domain: "ai" },

  // Mobile
  { name: "Progressive Web Apps", domain: "mobile" },
  { name: "Offline-First Architecture", domain: "mobile" },

  // Frontend
  { name: "Headless CMS", domain: "frontend" },

  // Blockchain
  { name: "Blockchain Fundamentals", domain: "blockchain" },
  { name: "Smart Contracts", domain: "blockchain" },
  { name: "Decentralized Apps", domain: "blockchain" },
  { name: "Consensus Mechanisms (PoW/PoS)", domain: "blockchain" },
  { name: "NFTs", domain: "blockchain" },

  // General
  { name: "Design Patterns", domain: "general" },
  { name: "SOLID Principles", domain: "general" },
  { name: "DRY/KISS/YAGNI", domain: "general" },
  { name: "Dependency Injection", domain: "general" },
  { name: "Inversion of Control", domain: "general" },
  { name: "Idempotent APIs", domain: "general" },
  { name: "Immutability", domain: "general" },
  { name: "Pure Functions", domain: "general" },
  { name: "Functional Programming Concepts", domain: "general" },
  { name: "Object-Oriented Programming Concepts", domain: "general" },
  { name: "Concurrency", domain: "general" },
  { name: "Parallelism", domain: "general" },
  { name: "Multithreading", domain: "general" },
  { name: "Race Conditions", domain: "general" },
  { name: "Deadlocks", domain: "general" },

  // DevEx
  { name: "Trunk-Based Development", domain: "devex" },
  { name: "Developer Portals", domain: "devex" },
  { name: "Internal Tooling", domain: "devex" },
];