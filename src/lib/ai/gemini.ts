import { GoogleGenerativeAI } from '@google/generative-ai'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function generateGeminiResponse(
  messages: ChatMessage[],
  apiKey: string,
  model: string = 'gemini-2.5-flash'
): Promise<string> {
  if (!apiKey) {
    throw new Error('Missing API key')
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    // Try the requested model, fall back to known-supported models if unavailable
    const candidateModels = [
      model,
      'gemini-2.5-flash',
      'gemini-1.5',
      'gemini-1.0',
      'text-bison-001'
    ]
    const prompt = messages.map(m => m.content).join('\n\n')

    let lastError: any = null
    for (const m of candidateModels) {
      try {
        console.debug(`Trying model ${m}`)
        const modelInstance = genAI.getGenerativeModel({ model: m })
        const result = await modelInstance.generateContent(prompt)
        const response = await result.response
        const text = response.text()
        if (text) return text
        lastError = new Error('Empty response')
      } catch (err) {
        // capture and continue to next candidate
        console.warn(`Model ${m} failed:`, err)
        lastError = err
        // If it's a 404/model-not-found error, continue to next model
        continue
      }
    }

    // If we get here, all candidate models failed
    console.error('All model attempts failed', lastError)
    throw lastError || new Error('No model produced a response')
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    throw error
  }
}