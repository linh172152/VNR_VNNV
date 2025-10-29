import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Send,
  Mic,
  Volume2,
  RefreshCw,
  X
} from 'lucide-react'
import { generateGeminiResponse } from '../lib/ai/gemini'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface Persona {
  id: string
  name: string
  title: string
  avatar: string
  description: string
  color: string
  personality: string
}

// Component constants
const aiPersona: Persona = {
  id: 'ai-assistant',
  name: 'AI Lịch sử Việt Nam',
  title: 'Trợ lý AI chuyên về giai đoạn 1954-1965',
  avatar: '/images/img2.svg',
  description: 'AI được huấn luyện chuyên sâu về giai đoạn 1954-1965 ở Việt Nam và quan điểm "nội chiến"',
  color: 'from-orange-500 to-red-600',
  personality: 'intelligent'
}

const suggestedQuestions = [
  "Quan điểm 'nội chiến' có đúng không khi có sự can thiệp của Mỹ?",
  "Hiệp định Geneva 1954 có ý nghĩa gì?",
  "Chế độ Ngô Đình Diệm có tính chính danh không?",
  "Mỹ can thiệp vào Việt Nam như thế nào?",
  "Tại sao gọi là chiến tranh giải phóng dân tộc?",
  "Mặt trận Dân tộc Giải phóng được thành lập khi nào?",
  "Chiến dịch Tố Cộng là gì?",
  "Nghị quyết Vịnh Bắc Bộ có tác động gì?"
]

const initialMessage = "Xin chào! Tôi là AI Lịch sử Việt Nam, được huấn luyện chuyên sâu về giai đoạn 1954-1965 ở Việt Nam. Tôi có thể giúp bạn phân tích quan điểm 'nội chiến', tìm hiểu về Hiệp định Geneva, chế độ Ngô Đình Diệm, sự can thiệp của Mỹ, và đưa ra nhận định về bản chất thực sự của cuộc đấu tranh trong giai đoạn này. Bạn muốn tìm hiểu về vấn đề gì?"

const AIHistoricalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('ai-chat-history')
    return saved ? JSON.parse(saved) : []
  })

  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  // Simple on-topic checker: returns true if the message appears to be about
  // Vietnam history (1954-1965) or is a greeting. If false, we won't call the
  // remote API and will politely refuse to answer off-topic questions.
  const isOnTopic = (message: string): boolean => {
    const lower = message.toLowerCase()

    // Allow common greetings and basic questions
    if (/(^|\s)(xin chào|chào|hello|hi|alo)(\s|$)/.test(lower)) return true
    if (/(thêm thông tin|cho tôi hỏi|cho hỏi|muốn hỏi)/.test(lower)) return true

    const allowedKeywords = [
      'nội chiến', 'hiệp định', 'geneva', 'ngô đình diệm', 'diệm', 'mỹ', 'can thiệp',
      'chiến tranh', 'giải phóng', 'tố cộng', 'vịnh bắc bộ', 'mặt trận',
      '1954', '1955', '1960', '1961', '1964', '1965', 'tổng tuyển cử',
      'lịch sử', 'việt nam', 'miền nam', 'miền bắc', 'sài gòn', 'hà nội'
    ]

    return allowedKeywords.some(k => lower.includes(k))
  }

  const generateAIResponse = async (message: string): Promise<string> => {
    setIsTyping(true)

    // Early on-topic check: refuse to answer questions that are not about
    // Vietnam history (1954-1965). This prevents the assistant from
    // responding to unrelated queries like "top 10 món ăn...".
    if (!isOnTopic(message)) {
      setIsTyping(false)
      return "Xin lỗi, tôi chỉ trả lời các câu hỏi về lịch sử Việt Nam giai đoạn 1954-1965. Vui lòng hỏi về Hiệp định Geneva, Ngô Đình Diệm, sự can thiệp của Mỹ, quan điểm 'nội chiến', v.v."
    }

    try {
      // Check if API key is available (Gemini)
      // Try environment variable first, then fallback to window config
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || 
                    (window as any).APP_CONFIG?.GEMINI_API_KEY
      if (!apiKey || apiKey.trim() === '') {
        setIsTyping(false)
        // Return a helpful response about the topic instead of API key message
        return "Tôi có thể giúp bạn tìm hiểu về giai đoạn 1954-1965 ở Việt Nam! Bạn có thể hỏi về:\n\n🔍 **Quan điểm 'nội chiến'** - Tại sao không đúng?\n📅 **Hiệp định Geneva 1954** - Nội dung và ý nghĩa\n+👑 **Chế độ Ngô Đình Diệm** - Tính chất và vi phạm\n🇺🇸 **Sự can thiệp của Mỹ** - Các giai đoạn can thiệp\n⚔️ **Chiến tranh giải phóng dân tộc** - Bản chất thực sự\n\nHãy thử hỏi một trong những chủ đề trên!"
      }

      // Use Gemini adapter
      // Lazy import the adapter to keep bundle small if not used
      // System prompt for Vietnam History 1954-1965
      const systemPrompt = `Bạn là một AI chuyên gia về lịch sử Việt Nam giai đoạn 1954-1965. Bạn được huấn luyện chuyên sâu để phân tích quan điểm "nội chiến" và cung cấp thông tin chính xác, khách quan về giai đoạn này.

KIẾN THỨC CỐT LÕI:

HIỆP ĐỊNH GENEVA 1954:
- Thời gian: 21/7/1954
- Nội dung: Kết thúc chiến tranh Đông Dương, chia đôi Việt Nam tại vĩ tuyến 17
- Dự kiến: Tổng tuyển cử thống nhất trong 2 năm (1956)
- Ý nghĩa: Cơ sở pháp lý cho việc thống nhất đất nước

CHẾ ĐỘ NGÔ ĐÌNH DIỆM (1954-1963):
- Đặc điểm: Độc tài gia đình trị, được Mỹ hậu thuẫn
- Vi phạm: Từ chối tổ chức tổng tuyển cử theo Hiệp định Geneva
- Đàn áp: Chiến dịch Tố Cộng (1955-1959), hơn 100,000 người bị bắt, 25,000 người bị giết
- Kết thúc: Bị đảo chính và giết chết ngày 2/11/1963

SỰ CAN THIỆP CỦA MỸ:
- Giai đoạn 1954-1960: Viện trợ kinh tế, chính trị (thuyết Domino Theory)
- Giai đoạn 1961-1964: Can thiệp quân sự gián tiếp, số quân tăng từ 3,200 lên 23,300
- Giai đoạn 1965-1975: Chiến tranh cục bộ với sự tham gia trực tiếp của quân đội Mỹ

QUAN ĐIỂM "NỘI CHIẾN":
- Định nghĩa: Cuộc xung đột vũ trang giữa các nhóm trong cùng một quốc gia, KHÔNG có sự can thiệp từ bên ngoài
- Thực tế: Mỹ đã can thiệp trực tiếp từ năm 1954
- Tính chính danh: Chính quyền Việt Nam Cộng hòa được Mỹ dựng lên, không có tính chính danh
- Kết luận: KHÔNG PHẢI là nội chiến mà là chiến tranh giải phóng dân tộc

BẢN CHẤT THỰC SỰ:
- Mục tiêu: Giải phóng dân tộc khỏi ách thống trị nước ngoài
- Lực lượng: Nhân dân miền Nam ủng hộ thống nhất đất nước
- Tính chính nghĩa: Đấu tranh vì độc lập, tự do của dân tộc
- Cơ sở pháp lý: Theo quyền tự quyết dân tộc của Liên Hợp Quốc

NGUYÊN TẮC TRẢ LỜI:
1. Sử dụng tiếng Việt chuẩn, dễ hiểu
2. Cung cấp thông tin chính xác dựa trên sự kiện lịch sử
3. Phân tích khách quan quan điểm "nội chiến"
4. Giải thích bối cảnh lịch sử để người đọc hiểu rõ hơn
5. Đưa ra nhận định dựa trên bằng chứng lịch sử
6. Khuyến khích tư duy phản biện và học hỏi
7. Độ dài phù hợp (100-400 từ tùy theo độ phức tạp của câu hỏi)
8. Sử dụng giọng điệu thân thiện, dễ tiếp cận

ĐIỀU CẤM:
- Không bịa đặt sự kiện lịch sử
- Không sử dụng ngôn ngữ phản cảm hoặc kích động
- Không trả lời câu hỏi ngoài phạm vi giai đoạn 1954-1965
- Không thể hiện quan điểm chính trị hiện tại
- Không thiên vị quá mức theo một quan điểm duy nhất`

      // Build messages array for the Gemini adapter (same role/content shape)
      const messages = [
        {
          role: 'system' as const,
          content: systemPrompt
        },
        // Add conversation history
        ...conversationHistory.map((msg: any) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })),
        // Add current message
        {
          role: 'user' as const,
          content: message
        }
      ]

      // Show a sanitized debug preview of the prompt in the chat (no API keys)
      try {
        const promptPreview = (systemPrompt + "\n\nCÂU HỎI: " + message).slice(0, 1200)
        // Log debug to console only (do not print API keys or long secrets)
        console.debug('DEBUG: Sending prompt preview:', promptPreview)

        const start = Date.now()
        // Generate response using Gemini adapter
        const reply = await generateGeminiResponse(messages, apiKey)
        const duration = Date.now() - start

        // Log debug info about the reply to console
        console.debug(`DEBUG: Received reply in ${duration} ms (length: ${reply?.length ?? 0})`)

        // Update conversation history
        const updatedHistory = [
          ...conversationHistory,
          { role: 'user' as const, content: message },
          { role: 'assistant' as const, content: reply }
        ]

        // Keep only last 10 exchanges to prevent context from getting too long
        if (updatedHistory.length > 20) {
          updatedHistory.splice(0, updatedHistory.length - 20)
        }

        localStorage.setItem('ai-chat-history', JSON.stringify(updatedHistory))
        setConversationHistory(updatedHistory)

        setIsTyping(false)
        return reply
      } catch (err) {
        // Log error to console and show friendly message to user
        const errorText = err instanceof Error ? err.message : String(err)
        console.error('DEBUG: Error calling Gemini API:', errorText)

        setIsTyping(false)
        return `Xin lỗi, tôi đang gặp sự cố kỹ thuật (${errorText}). Vui lòng thử lại sau.`
      }

    } catch (error) {
      console.error('Error calling Gemini API:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      })
      setIsTyping(false)

      // Check for specific API errors
      const errorMessage = error instanceof Error ? error.message : String(error)

      if (errorMessage.toLowerCase().includes('api key') || errorMessage.toLowerCase().includes('invalid')) {
        return "❌ API key không hợp lệ hoặc thiếu!\n\n🔧 Cách khắc phục:\n1. Kiểm tra API key trong file .env (VITE_GEMINI_API_KEY)\n2. Đảm bảo bạn đã cung cấp một API key hợp lệ\n3. Khởi động lại server (Ctrl+C rồi npm run dev)\n4. Refresh trang web\n\n💡 Hiện tại AI đang hoạt động ở chế độ offline với câu trả lời có sẵn."
      }

      if (errorMessage.includes('insufficient_quota') || errorMessage.includes('billing') || errorMessage.includes('quota')) {
        return "❌ Lỗi thanh toán!\n\n🔧 Nguyên nhân có thể:\n1. Tài khoản chưa có credit\n2. Đã vượt quá giới hạn sử dụng\n3. Cần nạp thêm credit vào tài khoản\n\n💡 Đang sử dụng chế độ offline với câu trả lời có sẵn."
      }

      // No more fallback responses - let the error propagate
      throw error;

      // Return a generic error message
      return "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau."
    }
  }

  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')

    // Generate AI response
    const aiResponse = await generateAIResponse(currentMessage)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiMessage])
  }

  const handleSuggestedQuestion = (question: string) => {
    setCurrentMessage(question)
  }

  const clearChat = () => {
    setMessages([])
    // Clear chat history
    setConversationHistory([])
    localStorage.removeItem('ai-chat-history')
    // Add initial message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: initialMessage,
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'vi-VN'
      speechSynthesis.speak(utterance)
    }
  }

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).webkitSpeechRecognition;

      const recognition = new SpeechRecognition()
      recognition.lang = 'vi-VN'
      recognition.onstart = () => setIsListening(true)
      recognition.onend = () => setIsListening(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setCurrentMessage(transcript)
      }
      recognition.start()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: initialMessage,
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [messages.length, initialMessage])

  const currentPersona = aiPersona

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    )
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentPersona.color} text-white p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          <img
            src={currentPersona.avatar}
            alt={currentPersona.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="font-semibold text-sm">{currentPersona.name}</h3>
            <p className="text-xs opacity-90">{currentPersona.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>



      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div               className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser
                  ? 'bg-orange-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {!message.isUser && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <button
                      onClick={() => speakMessage(message.text)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="p-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Đặt câu hỏi về giai đoạn 1954-1965..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <button
              onClick={startListening}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                isListening ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!currentMessage.trim()}
            className="p-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AIHistoricalAssistant
