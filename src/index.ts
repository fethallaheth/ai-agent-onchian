import "dotenv/config";
import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { performRun } from "./openai/performRun";


async function main() {
   
    const client = new OpenAI();
    const msg = "Hey Chaos, can you get my wallet Balance ?";

    const assistant = await createAssistant(client);

    const thread = await createThread(client, msg);

    const run = await createRun(client, thread, assistant.id);

    const result = await performRun(run, client, thread);

    console.log(result);
}
main();