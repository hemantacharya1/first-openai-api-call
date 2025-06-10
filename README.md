# OpenAI API Chat Application

A simple web-based chat interface that interacts with OpenAI's GPT-3.5-turbo model. This project demonstrates how to make API calls to OpenAI's chat completions endpoint using Node.js and Express.

## Features

- Simple web interface for interacting with ChatGPT
- Backend server handling API calls to OpenAI
- CORS enabled for frontend-backend communication
- Environment variable support for API key management

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- OpenAI API key

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/first-openai-api-call.git
   cd first-openai-api-call
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your OpenAI API key**
   - Create a `.env` file in the project root
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your-api-key-here
     ```
   - Alternatively, you can directly replace the API key in `first-api-call.js` at openaiKey

## Running the Application

1. **Start the server**
   ```bash
   node first-api-call.js
   ```

2. **Open the application**
   - Open your web browser and navigate to `http://localhost:3000`
   - Type your message in the input field and click "Send" to get a response from ChatGPT

## Project Structure

- `first-api-call.js` - Main server file handling API requests
- `index.html` - Simple web interface
- `package.json` - Project dependencies and configuration

## Dependencies

- express: Web server framework
- cors: Middleware for enabling CORS
- dotenv: For loading environment variables
- openai: Official OpenAI Node.js library

## License

This project is open source and available under the MIT License.
