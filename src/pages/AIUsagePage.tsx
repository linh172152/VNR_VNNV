import { motion } from 'framer-motion'
import {
  Bot,
  BookOpen,
  Search,
  MessageSquare,
  Brain,
  Code,
  Database,
  Zap,
  Shield,
  Globe,
  Users,
  Award
} from 'lucide-react'

const AIUsagePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const aiTools = [
    {
      icon: BookOpen,
      title: 'NotebookLM (Google)',
      description: 'Công cụ AI để phân tích và tổng hợp tài liệu lịch sử',
      purpose: 'Tham khảo và phân tích các tài liệu lịch sử về giai đoạn 1954-1965',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Bot,
      title: 'Cursor',
      description: 'Trình chỉnh sửa code với AI tích hợp',
      purpose: 'Phát triển và chỉnh sửa mã nguồn dự án với hỗ trợ AI',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Search,
      title: 'Web Search',
      description: 'Tìm kiếm thông tin cập nhật và xác minh dữ liệu',
      purpose: 'Tìm kiếm thông tin bổ sung và xác minh tính chính xác của dữ liệu',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const purposes = [
    {
      icon: Code,
      title: 'Phát triển Website',
      description: 'Sử dụng AI để viết code React, TypeScript và thiết kế giao diện người dùng',
      details: [
        'Viết component React với TypeScript',
        'Thiết kế giao diện responsive với Tailwind CSS',
        'Tạo animation với Framer Motion',
        'Xây dựng routing và navigation'
      ]
    },
    {
      icon: Database,
      title: 'Tạo Dữ liệu Lịch sử',
      description: 'AI hỗ trợ tạo và tổ chức dữ liệu về các sự kiện lịch sử',
      details: [
        'Tạo timeline events cho giai đoạn 1954-1965',
        'Viết câu hỏi quiz về các sự kiện lịch sử',
        'Tổ chức tài liệu tham khảo',
        'Phân tích và so sánh các quan điểm'
      ]
    },
    {
      icon: MessageSquare,
      title: 'AI Assistant',
      description: 'Tích hợp AI Assistant để trò chuyện về lịch sử',
      details: [
        'Hỗ trợ giọng nói tiếng Việt',
        'Trả lời câu hỏi về giai đoạn 1954-1965',
        'Phân tích quan điểm "nội chiến"',
        'Cung cấp thông tin chính xác và khách quan'
      ]
    },
    {
      icon: Globe,
      title: 'Nghiên cứu và Phân tích',
      description: 'AI hỗ trợ nghiên cứu và phân tích các nguồn tài liệu',
      details: [
        'Phân tích các tài liệu lịch sử',
        'So sánh các quan điểm khác nhau',
        'Tổng hợp thông tin từ nhiều nguồn',
        'Đưa ra nhận định dựa trên dữ kiện'
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Tăng hiệu quả',
      description: 'AI giúp tăng tốc độ phát triển và nghiên cứu'
    },
    {
      icon: Shield,
      title: 'Độ chính xác cao',
      description: 'AI đảm bảo tính chính xác của thông tin và code'
    },
    {
      icon: Users,
      title: 'Trải nghiệm tốt',
      description: 'Tạo ra trải nghiệm học tập tương tác và thú vị'
    },
    {
      icon: Award,
      title: 'Chất lượng cao',
      description: 'Đảm bảo chất lượng nội dung và giao diện'
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-medium mb-8">
                <Bot className="w-4 h-4 mr-2" />
                AI Usage Report - VNR202
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient-solid">AI USAGE</span>
              <br />
              <motion.span
                className="text-3xl md:text-4xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Công cụ và Mục đích Sử dụng
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Báo cáo chi tiết về các công cụ AI được sử dụng trong dự án và mục đích cụ thể của từng công cụ
              trong việc phát triển website nghiên cứu giai đoạn 1954-1965 ở Việt Nam.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Các Công cụ AI được Sử dụng
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Danh sách các công cụ trí tuệ nhân tạo được sử dụng trong dự án
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Mục đích sử dụng:</h4>
                    <p className="text-gray-700 text-sm">{tool.purpose}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Purposes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mục đích Sử dụng AI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Các mục đích cụ thể mà AI được sử dụng trong dự án
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purposes.map((purpose, index) => {
              const Icon = purpose.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {purpose.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {purpose.description}
                      </p>
                      <ul className="space-y-2">
                        {purpose.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lợi ích của AI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những lợi ích mà AI mang lại cho dự án
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reference Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Nguồn Tham khảo
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Nguồn tài liệu chính:</strong>
                </p>
                <ul className="text-left space-y-2 max-w-2xl mx-auto">
                  <li>• NotebookLM - Phân tích và tổng hợp tài liệu lịch sử</li>
                  <li>• Các tài liệu lịch sử về Hiệp định Geneva 1954</li>
                  <li>• Nghiên cứu về chế độ Ngô Đình Diệm và Việt Nam Cộng hòa</li>
                  <li>• Tài liệu về sự can thiệp của Mỹ vào Việt Nam</li>
                  <li>• Các nghiên cứu về tính chất cuộc chiến tranh Việt Nam</li>
                </ul>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    <strong>Lưu ý:</strong> Tất cả nội dung được tạo ra với sự hỗ trợ của AI 
                    và được tham khảo từ các nguồn tài liệu lịch sử đáng tin cậy. 
                    Mục đích là tạo ra một công cụ học tập tương tác và hiệu quả.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIUsagePage

