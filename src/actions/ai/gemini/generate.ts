"use server";

import { CV_TEMPLATE_SYSTEM_PROMPT, GOOGLE_PREFERRED_MODEL } from "@/constants/ai.constant";
import { generateText } from "ai";

export const generateCVTemplate = async (userPrompt: string) => {
  try {
    const { text } = await generateText({
      model: GOOGLE_PREFERRED_MODEL,
      system: CV_TEMPLATE_SYSTEM_PROMPT,
      prompt: CV_TEMPLATE_SYSTEM_PROMPT+ userPrompt,
    });

    return {
      success: true,
      message: "Template generated successfully",
      data: text,
    };
  } catch (error) {
    console.error("AI Generation Error:", error);
    return {
      success: false,
      message: "Failed to generate template. Please try again.",
      data: null,
    };
  }
};
