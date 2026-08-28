"use server";

import { getRandomTopic } from "@/db/queries/topics";
import { TopicDomain } from "@/lib/types";

const formatTopicResponse = (topic: {
    id: number;
    title: string;
    domain: string;
}) => ({
    id: topic.id.toString(),
    title: topic.title,
    domain: topic.domain as TopicDomain,
});

export const spinTopic = async () => {
    const randomTopic = await getRandomTopic();
    if (!randomTopic) return null;

    return formatTopicResponse(randomTopic);
};