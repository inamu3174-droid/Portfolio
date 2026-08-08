import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Server-side Gemini API Route
app.post('/api/ai-experiment', async (req, res) => {
  try {
    const { prompt, task } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful fallback response if key is missing
      res.status(200).json({
        output: `[Demo Mode]: "Generating creative output for: '${prompt}'". (Note: To enable live Gemini responses, configure GEMINI_API_KEY in the environment secrets panel).`,
        mode: 'fallback'
      });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    let systemInstruction = 'You are an elite creative technology AI assistant integrated into Inam Ul Haq\'s portfolio. Provide sharp, ultra-clean, elegant responses.';
    if (task === 'code') {
      systemInstruction = 'You are a master creative coder. Generate clean, highly readable React/TypeScript code snippets with brief concise explanations.';
    } else if (task === 'design') {
      systemInstruction = 'You are a world-class UI/UX designer. Provide striking design concepts, typography pairings, and spatial layout recommendations.';
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 1000
      }
    });

    res.json({ output: response.text || 'No response generated.' });
  } catch (error: any) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate AI response' });
  }
});

// Production build static serving
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  // Development mode: Vite middleware
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await vite.transformIndexHtml(url, `
<!doctype html>
<html lang="en" class="dark scroll-smooth bg-[#050505] text-white">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inam Ul Haq — Developer, Designer & Builder</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#050505] text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
      `);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
