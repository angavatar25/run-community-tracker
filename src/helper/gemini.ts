'use client'

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateResponse = async (json, flag) => {
  const models = [
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
  ];

  const prompt = `
    Based on this partnership data:

    ${JSON.stringify(json)}

    Please provide suggestions based on these filters:
    ${JSON.stringify(flag)}
  `;

  for (const model of models) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await ai.models.generateContent({
          model,
          contents: prompt,
        });

        return res;
      } catch (error: any) {
        const isUnavailable =
          error.status === 503 ||
          error.message?.includes("503");

        if (!isUnavailable) {
          throw error;
        }

        if (attempt < 2) {
          await sleep(1000 * 2 ** attempt);
        }
      }
    }
  }

  throw new Error("All Gemini models are currently unavailable.");
};
