import "dotenv/config";
import { db } from "../db";
import { topics } from "../db/schema";
import { concepts } from "./data/concepts";
import { techTopics } from "./data/technologies";
import { standaloneTopics } from "./data/standalone-topics";
import { domainCrossingRules } from "./data/domain-rule";
import { techPairs } from "./data/tech-pairs";

const seed = async () => {
  await db.delete(topics);

  const rows: (typeof topics.$inferInsert)[] = [];

  techTopics.forEach((topic) => {
    const allowedDomains = domainCrossingRules[topic.domain] ?? [];

    concepts.forEach((concept) => {
      if (allowedDomains.includes(concept.domain)) {
        rows.push({
          title: `${concept.name} with ${topic.name}`,
          shape: "pair",
          domain: topic.domain,
          technology: topic.name,
          concept: concept.name,
        });
      }
    });
  });

  standaloneTopics.forEach((topic) => {
    rows.push({
      title: topic.name,
      shape: "single",
      domain: topic.domain,
    });
  });

  techPairs.forEach((pair) => {
    const allowedDomains = domainCrossingRules[pair.domain] ?? [];

    concepts.forEach((concept) => {
      if (allowedDomains.includes(concept.domain)) {
        rows.push({
          title: `${concept.name}: ${pair.tech1} + ${pair.tech2}`,
          shape: "triple",
          domain: pair.domain,
          technology: pair.tech1,
          technology2: pair.tech2,
          concept: concept.name,
        });
      }
    });
  });

  await db.insert(topics).values(rows);

  console.log(`Seeded ${rows.length} topics`);
};

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});