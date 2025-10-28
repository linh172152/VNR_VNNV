// Minimal Gemini (Google Generative Models) adapter for browser usage.
// This adapter uses the Generative Models REST endpoint and an API key.
// Note: Calling third-party APIs directly from the browser with an API key
// is insecure for production. Consider proxying requests on a server.

export default async function generateGeminiResponse(
  messages: Array<{ role: string; content: string }>,
  apiKey: string,
  model = 'chat-bison-001'
): Promise<string> {
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('Missing Gemini API key')
  }

  const url = `https://generativemodels.googleapis.com/v1/models/${model}:generateMessage?key=${encodeURIComponent(
    apiKey
  )}`

  // Convert messages to Gemini format
  const geminiMessages = messages.map((m) => ({
    author: m.role === 'user' ? 'user' : m.role === 'assistant' ? 'assistant' : 'system',
    content: [
      {
        type: 'text',
        text: m.content
      }
    ]
  }))

  const body = {
    messages: geminiMessages,
    temperature: 0.7,
    maxOutputTokens: 1000
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Gemini API error: ${res.status} ${text}`)
  }

  const data = await res.json()

  // Parse possible response shapes. Prioritize candidates[].content[].text
  try {
    const candidate = data?.candidates?.[0]
    if (candidate) {
      if (Array.isArray(candidate.content)) {
        return candidate.content.map((c: any) => c.text || '').join('')
      }
      if (candidate.message && Array.isArray(candidate.message.content)) {
        return candidate.message.content.map((c: any) => c.text || '').join('')
      }
      if (candidate.text) {
        return candidate.text
      }
    }

    // Fallbacks for other response shapes
    if (Array.isArray(data.output) && data.output[0]?.content?.[0]?.text) {
      return data.output[0].content[0].text
    }

    // As last resort, stringify a compact summary
    return JSON.stringify(data)
  } catch (e) {
    throw new Error('Failed to parse Gemini response: ' + String(e))
  }
}
