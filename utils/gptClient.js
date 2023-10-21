import 'dotenv/config';
import OpenAI from 'openai';
import https from 'https';

const {API_VERSION,API_KEY,MODEL}=process.env;

const SYSTEM="system";
const USER="user";
const ASSISTANT="assistant";

const openai = new OpenAI({
  apiKey: "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",
  baseURL:'https://api.openai.com/v1/' ,
  baseOptions:{
    headers:{'api-key':'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'},
    params: {
        'api-version': "2023-07-01-preview"
    }
  }// This is also the default, can be omitted
});



// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{"role": "user", "content": "Hello!"}],
//   });
  
//   console.log(chatCompletion.choices[0].message);

const askGPT = async (messages,temperature=0)=>{

    try{
        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages :  messages,
            temperature : temperature,
        },{
            httpsAgent: new https.Agent({rejectUnauthorized:false})
        });
        const content = response.choices[0].message.content;
        return content;
    }catch(e){
        console.error(e);
    }
};

    const createSystemMessage = (message)=>({
        role: SYSTEM,
        content: message
    });

    const createUserMessage = (message)=>({
        role:USER,
        content: message
    });

    const createAssistantMessage = (message) => ({
        role:ASSISTANT,
        content: message
    });

export{askGPT,createSystemMessage,createUserMessage,createAssistantMessage};
