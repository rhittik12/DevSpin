"use server";

import { getTodayPick, createTodayPick } from "@/db/queries/today-pick";
import { getTopicById, markTopicAsUsed, getRandomUnusedTopic } from "@/db/queries/topics";
import { TopicDomain, TopicShape } from "@/lib/types";

const formatTopicResponse = (
    topic: {
        id: number;
        title: string;
        shape: string;
        domain: string;
        technology: string | null;
        technology2: string | null;
        concept: string | null;
    },
    covered: boolean
) => ({
    id: topic.id.toString(),
    title: topic.title,
    shape: topic.shape as TopicShape,
    domain: topic.domain as TopicDomain,
    technology: topic.technology ?? undefined,
    technology2: topic.technology2 ?? undefined,
    concept: topic.concept ?? undefined,
    covered,
});

export const spinTopic = async () => {
    const todayPick = await getTodayPick();

    if (todayPick) {
        const topic = await getTopicById(todayPick.topicId);
        if (!topic) return null;

        return formatTopicResponse(topic, todayPick.covered);
    }

    const randomTopic = await getRandomUnusedTopic();
    if (!randomTopic) return null;

    const newPick = await createTodayPick(randomTopic.id);
    await markTopicAsUsed(randomTopic.id);

    if (!newPick) return null;

    return formatTopicResponse(randomTopic, newPick.covered);
};