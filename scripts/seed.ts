import "dotenv/config";
import { db } from "../db";
import { topics } from "../db/schema";
import { concepts } from "./data/concepts";
import { techTopics } from "./data/technologies";
import { standaloneTopics } from "./data/standalone-topics";

const seed = async () => {
    await db.delete(topics);

    const rows: (typeof topics.$inferInsert)[] = [];

    techTopics.forEach((topic) => {
        concepts.forEach((concept) => {
            if (topic.domain === concept.domain) {
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

    await db.insert(topics).values(rows);

    console.log(`Seeded ${rows.length} topics`);
};

seed().catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
});