# joke-generator

This is a simple joke generator web application that generates jokes based on user-provided keywords. It uses a backend server to interact with the GoogleGenerativeAI library to generate jokes.

## Features

- Generate jokes based on user-provided keywords.
- Easy-to-use web interface.
- Uses GoogleGenerativeAI for joke generation.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- External Library: GoogleGenerativeAI

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/joke-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd joke-generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your Google API key:

    ```env
    G_API_KEY=your_google_api_key
    ```

5. Start the server:

    ```bash
    node server.js
    ```

6. Open your web browser and navigate to `http://localhost:8080` to use the joke generator.

## How to Use

1. Enter a keyword in the input field.
2. Click the "Generate Joke" button.
3. The generated joke will be displayed on the page.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is licensed under the [MIT License](LICENSE).
