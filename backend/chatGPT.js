const axios = require('axios');

// Function to interact with ChatGPT API and generate a joke
async function generateJoke(jokeType) {
    try {
        // Make a POST request to the ChatGPT API endpoint
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4-turbo",
            prompt: `Generate a ${jokeType} joke.`,
            max_tokens: 50, // Maximum length of the generated joke
            temperature: 0.7, // Controls the randomness of the generated text (0.0: deterministic, 1.0: highly random)
            n: 1, // Number of completions to generate
            stop: '\n' // Stop generating text at a newline character
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-proj-JwXHDGT31L2aGqgyUxHIT3BlbkFJMt0ECI7N8Skm5sImNlNN' // Replace with your actual API key
            }
        });

        // Extract the generated joke from the response
        const joke = response.data.choices[0].text.trim();

        return joke;
    } catch (error) {
        console.error('Error generating joke:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    generateJoke
};
