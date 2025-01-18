import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.images.generate({
            model:"dall-e-3",
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = aiResponse.data[0].b64_json;

        return res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);

        // Check for known error structure and send appropriate response
        if (error?.response?.data?.error?.message) {
            return res.status(500).json({
                success: false,
                message: error.response.data.error.message,
            });
        }

        // Handle other errors
        return res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong!',
        });
    }
});

export default router;
