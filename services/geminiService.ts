import { GoogleGenAI, Type } from "@google/genai";
import { LessonPlanRequest, GeneratedPlan } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLessonPlan = async (request: LessonPlanRequest): Promise<GeneratedPlan | null> => {
  try {
    const prompt = `
      Create a detailed 4-week introductory music lesson plan for a student.
      Details:
      - Age Group: ${request.age}
      - Instrument: ${request.instrument}
      - Student's Personal Goals/Interests: "${request.goal}"

      The tone should be fun, encouraging, and structured.
      Sonique Studio focuses on "Fun, Development, and Accessibility".
      
      For each week, provide:
      1. A main focus title.
      2. A core activity description.
      3. A list of 2-3 key musical concepts introduced.
      4. A list of 2-3 specific practice exercises for home.
      5. A specific expected outcome by the end of the week.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            overview: { type: Type.STRING },
            weeks: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  week: { type: Type.INTEGER },
                  focus: { type: Type.STRING },
                  activity: { type: Type.STRING },
                  keyConcepts: { 
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  practiceExercises: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  outcomes: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as GeneratedPlan;

  } catch (error) {
    console.error("Error generating lesson plan:", error);
    return null;
  }
};