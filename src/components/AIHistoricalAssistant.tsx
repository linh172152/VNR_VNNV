import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Send,
  Mic,
  Volume2,
  RefreshCw,
  X
} from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
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

const AIHistoricalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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

  const initialMessage = useMemo(() =>
    "Xin chào! Tôi là AI Lịch sử Việt Nam, được huấn luyện chuyên sâu về giai đoạn 1954-1965 ở Việt Nam. Tôi có thể giúp bạn phân tích quan điểm 'nội chiến', tìm hiểu về Hiệp định Geneva, chế độ Ngô Đình Diệm, sự can thiệp của Mỹ, và đưa ra nhận định về bản chất thực sự của cuộc đấu tranh trong giai đoạn này. Bạn muốn tìm hiểu về vấn đề gì?"
  , [])

  const getOfflineResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase()

    const responses: { [key: string]: string } = {
      "nội chiến": `Quan điểm "nội chiến" trong giai đoạn 1954-1965:

❌ **KHÔNG ĐÚNG** vì:

🔍 **Định nghĩa nội chiến**: Cuộc xung đột vũ trang giữa các nhóm trong cùng một quốc gia, KHÔNG có sự can thiệp từ bên ngoài

🇺🇸 **Thực tế lịch sử**: Mỹ đã can thiệp trực tiếp từ năm 1954:
• Viện trợ kinh tế, quân sự cho chính quyền Sài Gòn
• Gửi cố vấn quân sự từ năm 1961
• Đổ bộ lính Mỹ năm 1965

🏛️ **Tính chính danh**: Chính quyền Việt Nam Cộng hòa được Mỹ dựng lên, không có tính chính danh

✅ **Bản chất thực sự**: Chiến tranh giải phóng dân tộc chống chủ nghĩa thực dân mới`,

      "hiệp định geneva": `Hiệp định Geneva 1954:

📅 **Thời gian**: 21/7/1954

🎯 **Nội dung chính**:
• Kết thúc chiến tranh Đông Dương lần thứ nhất
• Chia đôi Việt Nam tại vĩ tuyến 17
• Dự kiến tổng tuyển cử thống nhất trong 2 năm (1956)

⚖️ **Ý nghĩa pháp lý**: Cơ sở pháp lý cho việc thống nhất đất nước

❌ **Vi phạm**: Chính quyền Sài Gòn từ chối tổ chức tổng tuyển cử`,

      "ngô đình diệm": `Chế độ Ngô Đình Diệm (1954-1963):

👑 **Đặc điểm**: Độc tài gia đình trị, tập trung quyền lực

🇺🇸 **Hậu thuẫn**: Được Mỹ ủng hộ hoàn toàn về kinh tế, quân sự

❌ **Vi phạm**: Từ chối tổ chức tổng tuyển cử theo Hiệp định Geneva

💀 **Đàn áp**: Chiến dịch Tố Cộng (1955-1959):
• Hơn 100,000 người bị bắt
• 25,000 người bị giết
• Luật 10/59 cho phép tử hình không cần xét xử

⚰️ **Kết thúc**: Bị đảo chính và giết chết ngày 2/11/1963`,

      "mỹ can thiệp": `Sự can thiệp của Mỹ vào Việt Nam:

📈 **Giai đoạn 1954-1960**: Viện trợ kinh tế, chính trị (thuyết Domino Theory)

🎖️ **Giai đoạn 1961-1964**: Can thiệp quân sự gián tiếp:
• Gửi cố vấn quân sự
• Cung cấp vũ khí, thiết bị
• Số quân tăng từ 3,200 (1961) lên 23,300 (1964)

⚔️ **Giai đoạn 1965-1975**: Chiến tranh cục bộ:
• Đổ bộ lính Mỹ trực tiếp
• Nghị quyết Vịnh Bắc Bộ (1964) tạo cớ pháp lý`,

      "giải phóng dân tộc": `Tại sao gọi là chiến tranh giải phóng dân tộc:

🎯 **Mục tiêu**: Giải phóng dân tộc khỏi ách thống trị nước ngoài

👥 **Lực lượng**: Nhân dân miền Nam ủng hộ thống nhất đất nước

🏛️ **Tính chính nghĩa**: Đấu tranh vì độc lập, tự do của dân tộc

🌍 **Xu thế thời đại**: Phù hợp với phong trào giải phóng dân tộc thế giới

⚖️ **Cơ sở pháp lý**: Theo quyền tự quyết dân tộc của Liên Hợp Quốc`,

      "mặt trận giải phóng": `Mặt trận Dân tộc Giải phóng miền Nam:

📅 **Thành lập**: 20/12/1960

🎯 **Mục tiêu**: Độc lập, dân chủ, hòa bình, trung lập

👥 **Thành phần**: Đoàn kết các lực lượng yêu nước ở miền Nam

⚔️ **Phương thức**: Kết hợp đấu tranh chính trị và vũ trang

🌟 **Ý nghĩa**: Phản ánh ý chí thống nhất của nhân dân miền Nam`,

      "tố cộng": `Chiến dịch Tố Cộng (1955-1959):

💀 **Mục đích**: Đàn áp các phong trào yêu nước ở miền Nam

📜 **Luật 10/59**: Cho phép tử hình không cần xét xử

📊 **Thống kê**:
• Hơn 100,000 người bị bắt
• 25,000 người bị giết
• Hàng nghìn người bị tra tấn

❌ **Hậu quả**: Tạo ra sự căm thù sâu sắc trong nhân dân`,

      "vịnh bắc bộ": `Nghị quyết Vịnh Bắc Bộ (7/8/1964):

⚔️ **Nội dung**: Cho phép Tổng thống Mỹ sử dụng vũ lực ở Việt Nam

🎯 **Mục đích**: Tạo cớ pháp lý cho can thiệp quân sự trực tiếp

📈 **Hậu quả**: Mở đường cho cuộc chiến tranh cục bộ

🇺🇸 **Ý nghĩa**: Bước ngoặt trong chính sách của Mỹ đối với Việt Nam`,

      "tại sao": `Tại sao giai đoạn 1954-1965 không phải là nội chiến?

🔍 **Định nghĩa nội chiến**: Xung đột vũ trang giữa các nhóm trong cùng một quốc gia, KHÔNG có sự can thiệp từ bên ngoài

🇺🇸 **Thực tế lịch sử**: Mỹ đã can thiệp trực tiếp từ năm 1954:
• Viện trợ kinh tế, quân sự cho chính quyền Sài Gòn
• Gửi cố vấn quân sự từ năm 1961
• Đổ bộ lính Mỹ năm 1965

🏛️ **Tính chính danh**: Chính quyền Việt Nam Cộng hòa được Mỹ dựng lên, không có tính chính danh

✅ **Kết luận**: Đây là chiến tranh giải phóng dân tộc chống chủ nghĩa thực dân mới`,

      "như thế nào": `Giai đoạn 1954-1965 diễn ra như thế nào?

📅 **1954**: Hiệp định Geneva chia đôi Việt Nam tại vĩ tuyến 17
👑 **1954-1963**: Chế độ Ngô Đình Diệm được Mỹ hậu thuẫn
💀 **1955-1959**: Chiến dịch Tố Cộng đàn áp nhân dân
🇺🇸 **1961-1964**: Mỹ can thiệp quân sự gián tiếp
⚔️ **1964**: Nghị quyết Vịnh Bắc Bộ tạo cớ pháp lý
🎯 **1965**: Mỹ đổ bộ lính trực tiếp, bắt đầu chiến tranh cục bộ

🌟 **Bản chất**: Cuộc đấu tranh giải phóng dân tộc chống ngoại xâm`,

      "ai": `Ai là những nhân vật chính trong giai đoạn 1954-1965?

👑 **Ngô Đình Diệm**: Tổng thống Việt Nam Cộng hòa (1954-1963)
🇺🇸 **Tổng thống Mỹ**: Eisenhower, Kennedy, Johnson
🎖️ **Tướng Mỹ**: Westmoreland, McNamara
👥 **Nhân dân miền Nam**: Ủng hộ thống nhất đất nước
🏛️ **Chính quyền Sài Gòn**: Được Mỹ dựng lên, thiếu tính chính danh

🌟 **Điểm chung**: Tất cả đều liên quan đến cuộc đấu tranh giải phóng dân tộc`,

      "khi nào": `Khi nào các sự kiện quan trọng diễn ra?

📅 **21/7/1954**: Hiệp định Geneva
👑 **1954**: Ngô Đình Diệm lên nắm quyền
💀 **1955-1959**: Chiến dịch Tố Cộng
🇺🇸 **1961**: Mỹ gửi cố vấn quân sự
⚔️ **7/8/1964**: Nghị quyết Vịnh Bắc Bộ
🎯 **1965**: Mỹ đổ bộ lính trực tiếp

🌟 **Kết luận**: Toàn bộ giai đoạn 1954-1965 là quá trình Mỹ can thiệp ngày càng sâu vào Việt Nam`
    }

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword) || lowerMessage.includes(keyword.replace(/\s+/g, ''))) {
        return response
      }
    }

    // Check for common greetings
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('chào')) {
      return "Xin chào! Tôi có thể giúp bạn tìm hiểu về giai đoạn 1954-1965 ở Việt Nam. Bạn muốn hỏi về: Quan điểm 'nội chiến', Hiệp định Geneva, Chế độ Ngô Đình Diệm, Sự can thiệp của Mỹ, hay Chiến tranh giải phóng dân tộc?"
    }

    // Check for general questions about the period
    if (lowerMessage.includes('giai đoạn') || lowerMessage.includes('thời kỳ') || lowerMessage.includes('period')) {
      return `Giai đoạn 1954-1965 là một thời kỳ quan trọng trong lịch sử Việt Nam:

📅 **Bối cảnh**: Sau Hiệp định Geneva 1954, Việt Nam bị chia đôi tại vĩ tuyến 17
👑 **Miền Nam**: Chế độ Ngô Đình Diệm được Mỹ hậu thuẫn
🇺🇸 **Can thiệp Mỹ**: Từ viện trợ kinh tế đến can thiệp quân sự trực tiếp
⚔️ **Bản chất**: Chiến tranh giải phóng dân tộc chống chủ nghĩa thực dân mới

🔍 **Quan điểm "nội chiến"**: KHÔNG ĐÚNG vì có sự can thiệp của Mỹ từ năm 1954

Bạn muốn tìm hiểu sâu hơn về khía cạnh nào?`
    }

    // Check for questions about the main topic
    if (lowerMessage.includes('chủ đề') || lowerMessage.includes('topic') || lowerMessage.includes('bài học')) {
      return `Chủ đề chính của tôi là: **"Giai đoạn 1954-1965 ở Việt Nam: Có phải là nội chiến không?"**

🎯 **Câu hỏi nghiên cứu**: Quan điểm cho rằng giai đoạn 1954-1965 là "nội chiến" có đúng không?

📊 **Phân tích chính**:
• Hiệp định Geneva 1954 và việc chia đôi đất nước
• Chế độ Ngô Đình Diệm và tính chính danh
• Sự can thiệp của Mỹ qua các giai đoạn
• Bản chất thực sự của cuộc đấu tranh

✅ **Kết luận**: KHÔNG phải nội chiến mà là chiến tranh giải phóng dân tộc

Bạn muốn tìm hiểu chi tiết về khía cạnh nào?`
    }

    // Check for completely off-topic questions (not related to history or Vietnam)
    const completelyOffTopicKeywords = [
      'thời tiết', 'thời trang', 'âm nhạc', 'phim ảnh', 'thể thao', 'du lịch', 
      'nấu ăn', 'công nghệ', 'lập trình', 'toán học', 'vật lý', 'hóa học',
      'sinh học', 'địa lý', 'kinh tế', 'tài chính', 'y tế', 'giáo dục',
      'tình yêu', 'hẹn hò', 'gia đình', 'bạn bè', 'công việc', 'nghề nghiệp'
    ]
    
    for (const keyword of completelyOffTopicKeywords) {
      if (lowerMessage.includes(keyword)) {
        return `Tôi là AI chuyên về lịch sử Việt Nam giai đoạn 1954-1965. Tôi không thể trả lời câu hỏi về "${keyword}". 

Hãy hỏi tôi về:
🔍 Quan điểm "nội chiến" trong giai đoạn này
📅 Hiệp định Geneva 1954
👑 Chế độ Ngô Đình Diệm
🇺🇸 Sự can thiệp của Mỹ
⚔️ Chiến tranh giải phóng dân tộc

Tôi sẽ giúp bạn hiểu rõ hơn về giai đoạn lịch sử quan trọng này!`
      }
    }

    return null
  }

          const generateAIResponse = async (message: string): Promise<string> => {
    setIsTyping(true)

    // First try offline responses for better user experience
    const offlineResponse = getOfflineResponse(message)
    if (offlineResponse) {
      setIsTyping(false)
      return offlineResponse
    }

    try {
      // Check if API key is available
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY
      if (!apiKey || apiKey.trim() === '') {
        setIsTyping(false)
        // Return a helpful response about the topic instead of API key message
        return "Tôi có thể giúp bạn tìm hiểu về giai đoạn 1954-1965 ở Việt Nam! Bạn có thể hỏi về:\n\n🔍 **Quan điểm 'nội chiến'** - Tại sao không đúng?\n📅 **Hiệp định Geneva 1954** - Nội dung và ý nghĩa\n👑 **Chế độ Ngô Đình Diệm** - Tính chất và vi phạm\n🇺🇸 **Sự can thiệp của Mỹ** - Các giai đoạn can thiệp\n⚔️ **Chiến tranh giải phóng dân tộc** - Bản chất thực sự\n\nHãy thử hỏi một trong những chủ đề trên!"
      }



      // Import OpenAI
      const { OpenAI } = await import('openai')

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })

      // Get conversation history from localStorage
      const conversationHistory = JSON.parse(localStorage.getItem('ai-chat-history') || '[]')

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

      // Build messages array for OpenAI
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

      // Generate response using OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
      })

      const reply = completion.choices[0]?.message?.content || "Xin lỗi, tôi không thể tạo phản hồi lúc này."

      // Update conversation history
      const updatedHistory = [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: reply }
      ]

      // Keep only last 10 exchanges to prevent context from getting too long
      if (updatedHistory.length > 20) {
        updatedHistory.splice(0, updatedHistory.length - 20)
      }

      localStorage.setItem('ai-chat-history', JSON.stringify(updatedHistory))

      setIsTyping(false)
      return reply

    } catch (error) {
      console.error('Error calling OpenAI API:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      })
      setIsTyping(false)

      // Check for specific API errors
      const errorMessage = error instanceof Error ? error.message : String(error)

      if (errorMessage.includes('API key not valid') || errorMessage.includes('Incorrect API key') || errorMessage.includes('invalid_api_key')) {
        return "❌ API key không hợp lệ!\n\n🔧 Cách khắc phục:\n1. Kiểm tra API key trong file .env\n2. Đảm bảo API key bắt đầu bằng 'sk-proj-...'\n3. Khởi động lại server (Ctrl+C rồi npm run dev)\n4. Refresh trang web\n\n💡 Hiện tại AI đang hoạt động ở chế độ offline với câu trả lời có sẵn."
      }

      if (errorMessage.includes('quota') || errorMessage.includes('rate_limit_exceeded')) {
        return "Xin lỗi, đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau."
      }

      if (errorMessage.includes('insufficient_quota') || errorMessage.includes('billing')) {
        return "❌ Lỗi thanh toán!\n\n🔧 Nguyên nhân có thể:\n1. Tài khoản OpenAI chưa có credit\n2. Đã vượt quá giới hạn sử dụng\n3. Cần nạp thêm credit vào tài khoản\n\n💡 Đang sử dụng chế độ offline với câu trả lời có sẵn."
      }

      // Fallback response with helpful content
      const fallbackResponses = {
        "geneva": "Hiệp định Geneva được ký ngày 21/7/1954, kết thúc chiến tranh Đông Dương lần thứ nhất. Hiệp định tạm chia Việt Nam tại vĩ tuyến 17 và quy định tổ chức tổng tuyển cử thống nhất trong 2 năm (1956).",
        "diệm": "Ngô Đình Diệm lên nắm quyền năm 1954 với sự ủng hộ của Mỹ. Ông từ chối tổ chức tổng tuyển cử năm 1956 và thực hiện Chiến dịch Tố Cộng đàn áp người dân. Diệm bị đảo chính và giết chết ngày 2/11/1963.",
        "tố cộng": "Chiến dịch Tố Cộng (1955-1959) là chiến dịch đàn áp của chính quyền Diệm. Luật 10/59 cho phép tử hình không cần xét xử. Hơn 100,000 người bị bắt, 25,000 người bị giết.",
        "mặt trận": "Mặt trận Dân tộc Giải phóng miền Nam được thành lập ngày 20/12/1960, phản ứng trước sự đàn áp của chế độ Mỹ-Diệm. Mục tiêu: độc lập, dân chủ, hòa bình, trung lập.",
        "mỹ": "Mỹ bắt đầu can thiệp vào Việt Nam từ 1954 thay thế Pháp. Số quân Mỹ tăng từ 3,200 (1961) lên 23,300 (1964) dưới thời Tổng thống Kennedy.",
        "nội chiến": "Quan điểm 'nội chiến' là KHÔNG ĐÚNG vì có sự can thiệp của Mỹ từ năm 1954. Đây thực chất là chiến tranh giải phóng dân tộc chống chủ nghĩa thực dân mới.",
        "giải phóng": "Chiến tranh giải phóng dân tộc vì mục tiêu độc lập, tự do của dân tộc. Nhân dân miền Nam ủng hộ thống nhất đất nước, không phải xung đột nội bộ."
      }

      const lowerMessage = message.toLowerCase()
      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerMessage.includes(key)) {
          return response + "\n\n(Lưu ý: AI đang gặp sự cố kỹ thuật, đây là thông tin cơ bản. Vui lòng thử lại sau.)"
        }
      }

      // Final fallback - try to provide a helpful response based on context
      const historyKeywords = ['lịch sử', 'việt nam', 'chiến tranh', 'cách mạng', 'đảng', 'chính trị', 'chính quyền', 'dân tộc', 'độc lập', 'tự do', 'thống nhất', 'miền nam', 'miền bắc', 'sài gòn', 'hà nội']
      const isHistoryRelated = historyKeywords.some(keyword => lowerMessage.includes(keyword))
      
      if (isHistoryRelated) {
        return `Tôi hiểu bạn đang hỏi về lịch sử Việt Nam. Tôi chuyên sâu về giai đoạn 1954-1965. Dựa trên kiến thức của tôi, tôi có thể giúp bạn hiểu:

🔍 **Về quan điểm "nội chiến"**: Giai đoạn 1954-1965 KHÔNG phải là nội chiến vì có sự can thiệp trực tiếp của Mỹ từ năm 1954.

📅 **Về Hiệp định Geneva**: Ký ngày 21/7/1954, chia đôi Việt Nam tại vĩ tuyến 17, dự kiến tổng tuyển cử thống nhất năm 1956.

👑 **Về chế độ Ngô Đình Diệm**: Độc tài gia đình trị, được Mỹ hậu thuẫn, từ chối tổ chức tổng tuyển cử, thực hiện Chiến dịch Tố Cộng đàn áp nhân dân.

🇺🇸 **Về sự can thiệp của Mỹ**: Từ viện trợ kinh tế (1954-1960) đến can thiệp quân sự gián tiếp (1961-1964) và trực tiếp (1965-1975).

Bạn muốn tìm hiểu sâu hơn về khía cạnh nào?`
      } else {
        return `Tôi là AI chuyên về lịch sử Việt Nam giai đoạn 1954-1965. Tôi có thể giúp bạn hiểu về giai đoạn lịch sử quan trọng này.

🔍 **Quan điểm "nội chiến"** - Tại sao không đúng?
📅 **Hiệp định Geneva 1954** - Nội dung và ý nghĩa  
👑 **Chế độ Ngô Đình Diệm** - Tính chất và vi phạm
🇺🇸 **Sự can thiệp của Mỹ** - Các giai đoạn can thiệp
⚔️ **Chiến tranh giải phóng dân tộc** - Bản chất thực sự

Hãy hỏi tôi về bất kỳ khía cạnh nào của giai đoạn 1954-1965!`
      }
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
    // Clear thread from localStorage to start fresh
    localStorage.removeItem('ai-chat-thread-id')
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
