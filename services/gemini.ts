
import { GoogleGenAI } from "@google/genai";
import { ISAAC_BIO, PROJECTS, SKILLS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from "../constants";

const getGeminiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generatePortfolioResponse = async (userMessage: string) => {
  const ai = getGeminiClient();
  
  const systemInstruction = `
    You are the AI Assistant for Isaac Igbekele Idolor's Portfolio. 
    Your goal is to answer questions about Isaac's professional career in IT Support, Infrastructure, and Data Analysis.
    
    Context about Isaac:
    - Bio: ${ISAAC_BIO}
    - Technical Expertise: Languages (V#, JavaScript, R, C++, Python, SQL), Frameworks (Pandas, NumPy, Scikit-learn, MySQL, PostgreSQL).
    - Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
    - Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
    - Education: ${EDUCATION.map(ed => `${ed.degree} from ${ed.institution}`).join('; ')}
    - Certifications: ${CERTIFICATIONS.join(', ')}
    - Location: Lagos, Nigeria.
    - Phone: 07041609977
    
    Guidelines:
    - Be professional, helpful, and concise.
    - If asked about specific jobs like Cornerstone Energy, mention he supports over 100 users and maintains 99.9% uptime.
    - If asked about skills, highlight his mix of IT Infrastructure and Data Analytics.
    - Do not make up facts. Suggest contacting him via LinkedIn or Email (idolorisaac@gmail.com) if you lack specific info.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please reach out to Isaac directly at idolorisaac@gmail.com.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble accessing Isaac's records right now. Please try again or check the Contact section!";
  }
};
