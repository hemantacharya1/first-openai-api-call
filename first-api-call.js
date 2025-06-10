import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();

const openaiKey = "xxxxxxxxxxxxxxxxxxxxxxxx";

const openai = new OpenAI({apiKey: openaiKey});

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/ask', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    });

    const reply = chatResponse.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: 'Something went wrong.' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
