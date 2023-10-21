import { askGPT,createAssistantMessage,createSystemMessage,createUserMessage } from "./utils/gptClient.js"

const userMessage = createUserMessage('Capital of Japan')
const response = await askGPT([userMessage]);
console.log(response);