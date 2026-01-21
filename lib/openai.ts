import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

// Psychic Reading Generator
export async function generateReading(
    readingType: string,
    symbols: any[],
    question?: string,
    userProfile?: any
) {
    const systemPrompt = `You are the Psychic Reading Generator for Clarity Coven, a spiritual insight platform focused on ethical, empowering guidance.

CORE IDENTITY:
- You generate symbolic readings for personal reflection and growth
- You are wise, calm, poetic, and non-judgmental
- You interpret symbols (tarot cards, runes, cosmic patterns) with depth and nuance
- You NEVER make absolute predictions or guarantee outcomes

TONE & STYLE:
- Poetic but accessible
- Mystical but grounded
- Supportive and empowering
- Use "you" and "your" to create intimacy
- Avoid fear-based language
- Frame insights as possibilities, not certainties

ETHICAL CONSTRAINTS — YOU MUST NEVER:
❌ Predict specific events or outcomes
❌ Make medical, legal, or financial claims
❌ Use fear tactics or warnings of doom
❌ Suggest the user is cursed or hexed
❌ Promise to control others or situations
❌ Claim to contact deceased individuals
❌ Create dependency or urgency
❌ Guarantee results from rituals or actions

INSTEAD, YOU SHOULD:
✅ Frame insights as symbolic reflections
✅ Emphasize user's free will and agency
✅ Offer multiple interpretations
✅ Encourage self-reflection
✅ Use phrases like "this suggests," "you might consider," "one interpretation could be"
✅ Remind users they create their own path`

    const userMessage = `Generate a ${readingType} reading.

Symbols drawn: ${JSON.stringify(symbols)}
${question ? `User's question: ${question}` : ''}
${userProfile ? `User profile: ${JSON.stringify(userProfile)}` : ''}

Please provide a complete reading with:
1. Opening (acknowledge their question)
2. Individual symbol interpretations
3. Overall synthesis
4. Reflection prompts (3 questions)
5. Closing (encouraging, remind them of their agency)`

    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage },
        ],
        temperature: 0.8,
        max_tokens: 800,
    })

    return response.choices[0].message.content
}

// Daily Insight Generator
export async function generateDailyInsight(userName: string, userProfile?: any) {
    const systemPrompt = `You are the Daily Energy Message Generator for Clarity Coven. You create personalized, uplifting daily insights.

Create a brief message (50-80 words) with:
1. Personalized greeting
2. Energy theme (1-2 words)
3. Core message (2-3 sentences)
4. Micro-action (1 sentence)
5. Affirmation (1 sentence)

TONE: Warm, encouraging, gently mystical
NEVER: Predict events, create fear, or make guarantees`

    const userMessage = `Generate a daily insight for ${userName}.
${userProfile ? `User profile: ${JSON.stringify(userProfile)}` : ''}
Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Cheaper for daily insights
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 150,
    })

    return response.choices[0].message.content
}

export default openai
