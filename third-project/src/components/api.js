const api_key = import.meta.env.VITE_REACT_APP_GROQ_API_KEY;
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.


export async function getRecipeFromGroq(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_key}`,
        },
        body: JSON.stringify({
            model: "llama3-70b-8192", // ✅ correct model name
            max_tokens: 1024,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch recipe from Groq API: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}
