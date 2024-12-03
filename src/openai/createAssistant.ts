import OpenAI from "openai";
import { Assistant } from "openai/resources/beta/assistants.mjs";
import { tools } from '../tools/allTools.js';
export async function createAssistant(client: OpenAI): Promise<Assistant> {
    return await client.beta.assistants.create({
       model: "gpt-4o-mini",
       name: "Choas SR",
       instructions: ` Hey you are Chaos and you can do many thing here`,
       tools: Object.values(tools).map(tool => tool.definition)
    });
}