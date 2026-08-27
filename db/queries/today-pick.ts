import { db } from "../index";
import { todayPick } from "../schema";
import { eq } from "drizzle-orm";
import { getTodayDateString } from "../../lib/date-utils";

export const getTodayPick = async () => {
    const todayDate = getTodayDateString();

    const todaysPick = await db
        .select()
        .from(todayPick)
        .where(eq(todayPick.date, todayDate))
        .limit(1);

    return todaysPick[0] || null;
}

export const createTodayPick = async (topicId: number) => {
    const todayDate = getTodayDateString();

    const newTodayPick = await db
        .insert(todayPick)
        .values({
            date: todayDate,
            topicId: topicId
        })
        .returning();

    return newTodayPick[0] || null;
}

export const markTodayPickAsCovered = async () => {
    const todayDate = getTodayDateString();

    const result = await db
        .update(todayPick)
        .set({ covered: true })
        .where(eq(todayPick.date, todayDate))
        .returning();
        
    return result;
}