import { db } from "../index";
import { topics } from "../schema";
import { sql } from "drizzle-orm";

export const getRandomTopic = async () => {
    const unusedTopic = await db
        .select()
        .from(topics)
        .orderBy(sql`RANDOM()`)
        .limit(1)

    return unusedTopic[0] || null;
}