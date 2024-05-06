document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const keywordInput = document.getElementById('keyword');
    const jokeContainer = document.getElementById('jokeContainer');

    generateBtn.addEventListener('click', async () => {
        const keyword = keywordInput.value;

        try {
            const response = await fetch('https://joke-generator-backend-e319.onrender.com/generate-joke', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keyword })
            });

            const data = await response.json();
            const joke = data.joke;

            jokeContainer.innerHTML = `<p>${joke}</p>`;
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
