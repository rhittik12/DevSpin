import { db } from "../index";
import { topics } from "../schema";
import { eq, sql } from "drizzle-orm";

export const getRandomUnusedTopic = async () => {
    const unusedTopic = await db
        .select()
        .from(topics)
        .where(eq(topics.isUsed, false))
        .orderBy(sql`RANDOM()`)
        .limit(1)

    return unusedTopic[0] || null;
}

export const markTopicAsUsed = async (topicId: number) => {
    const result = await db.update(topics)
        .set({ isUsed: true })
        .where(eq(topics.id, topicId));

    return result;
}

export const getTopicById = async (topicId: number) => {
    const topic = await db
        .select()
        .from(topics)
        .where(eq(topics.id, topicId))
        .limit(1);
    
    return topic[0] || null;
}