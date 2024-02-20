require('dotenv').config()
const OpenAI = require('openai')
const openai = new OpenAI({
    apiKey: process.env.APIKEY, dangerouslyAllowBrowser: true 
});

const runPrompt = async (req, res, difficulty) => {
    try {
     const prompt = `I am out of ideas for projects. Give me a ${difficulty} creative project and list the 
     languages and/or frameworks along with it. Return this in a json file with the project, languages, frameworks, project description, features, and difficulty level. 
     Provide your answer in JSON form. 
     Reply with only the answer in JSON form and include no other commentary.
     Each json item has this form: key: value.
     Each project should have:
         {
         project: <value>,
         difficulty: <value>,
         description: <value>,
         languages : [<values>],
         frameworks: [<values>],
         features: [<values>]
         }
     Return only 1 project at a time and have no parent element
     `;
     const idea = await projectIdea(prompt)
     res.status(200).json(idea);
    }
    catch(e) {
     res.status(400).json({ error: e.message });
    }
 }

async function projectIdea(prompt) {
try {  
const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [
    {
        role: "system",
        content: prompt
    }
    ],
    max_tokens: 500,
    temperature: 1.5,
    response_format: { type: "json_object" }
});
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content
    } catch(error) {
    console.error('Error: ',error);
}
}
module.exports={runPrompt};


