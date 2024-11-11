const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ensure API key is correctly set in your environment
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  console.error("API key is missing. Make sure NEXT_PUBLIC_GEMINI_API_KEY is set in environment variables.");
}

// Initialize Google Generative AI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Configure model and generation parameters
const modelConfig = {
  model: "gemini-1.5-flash",
};

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateCourseLayout_AI = async ({ history, generationConfig }) => {
  try {
    const response = await model.startChat({
      generationConfig,
      history,
    });

    console.log("API Response Debug:", JSON.stringify(response, null, 2));

    if (response?.error) {
      console.error("Response Error:", response.error);
      return null;
    }

    const courseLayout = response?.responses?.[0]?.content || response?.content || null;
    if (courseLayout) {
      console.log("Generated Course Layout:", courseLayout);
      return courseLayout;
    } else {
      console.error("No content found in response:", response);
      return null;
    }
  } catch (error) {
    console.error("Error generating course layout:", error);
    return null;
  }
};
