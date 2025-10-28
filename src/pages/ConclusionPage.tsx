import { motion } from 'framer-motion'
import {
  CheckCircle,
  Gavel,
  Users,
  Heart,
  Award,
  BookOpen,
  Globe,
  Flag,
  Star,
  TrendingUp,
  Shield,
  // Target, // Unused for now
  Lightbulb
} from 'lucide-react'

const ConclusionPage = () => {
  const mainConclusion = {
    title: "KẾT LUẬN VỀ GIAI ĐOẠN 1954-1965",
    description: "Dựa trên phương pháp luận sử học và lý thuyết chính trị học quốc tế, giai đoạn 1954-1965 ở Việt Nam không phải là nội chiến mà là cuộc đấu tranh giải phóng dân tộc chống chủ nghĩa thực dân mới của Mỹ"
  }

  const theoreticalBasis = [
    "Lý thuyết giải phóng dân tộc: Theo học thuyết của Frantz Fanon và các nhà lý luận chống thực dân, đây là cuộc đấu tranh giải phóng dân tộc chống chủ nghĩa thực dân mới",
    "Phương pháp luận sử học: Dựa trên phân tích nguyên nhân-kết quả và so sánh lịch sử với các cuộc chiến tranh giải phóng dân tộc khác",
    "Lý thuyết chính trị học quốc tế: Theo định nghĩa của các học giả quốc tế, nội chiến không bao gồm sự can thiệp từ bên ngoài"
  ]

  const practicalBasis = [
    "Bằng chứng lịch sử cụ thể: Pentagon Papers (1971) chứng minh sự can thiệp của Mỹ từ năm 1954",
    "Tính chính danh pháp lý: Theo lý thuyết của Max Weber, chính quyền Việt Nam Cộng hòa thiếu tính chính danh vì không được nhân dân ủng hộ",
    "Thực tiễn quốc tế: Các nghiên cứu của Gabriel Kolko, Noam Chomsky, Marilyn B. Young đều khẳng định tính chất giải phóng dân tộc"
  ]

  const valueBasis = [
    "Giá trị nhân quyền: Theo Tuyên ngôn Quốc tế Nhân quyền (1948), các dân tộc có quyền tự quyết",
    "Giá trị dân tộc: Theo Nghị quyết 1514 của Liên Hợp Quốc (1960), quyền tự quyết dân tộc là nguyên tắc cơ bản",
    "Giá trị thời đại: Phù hợp với xu thế giải phóng dân tộc thế giới thập niên 1950-1960"
  ]

  const characteristics = [
    {
      icon: Flag,
      title: "Tính chất giải phóng dân tộc",
      points: [
        "Đấu tranh chống lại sự can thiệp của nước ngoài",
        "Thống nhất đất nước là mục tiêu chính",
        "Đại đoàn kết toàn dân tộc"
      ]
    },
    {
      icon: Globe,
      title: "Tính chất cách mạng",
      points: [
        "Xóa bỏ chế độ thực dân mới",
        "Nhân dân làm chủ đất nước",
        "Phát triển đất nước độc lập"
      ]
    },
    {
      icon: Users,
      title: "Tính chất chính nghĩa",
      points: [
        "Đấu tranh vì lợi ích của nhân dân",
        "Phù hợp với ý chí của toàn dân",
        "Được quốc tế ủng hộ"
      ]
    }
  ]

  const historicalSignificance = [
    {
      icon: Flag,
      title: "Đối với Việt Nam",
      points: [
        "Khẳng định tính chính nghĩa của cuộc đấu tranh giải phóng",
        "Làm rõ bản chất thực sự của giai đoạn 1954-1965",
        "Cung cấp bài học quý báu cho các thế hệ mai sau"
      ]
    },
    {
      icon: Globe,
      title: "Đối với thế giới",
      points: [
        "Minh chứng cho tính chính nghĩa của phong trào giải phóng dân tộc",
        "Phản ánh đúng bản chất của chủ nghĩa thực dân mới",
        "Đóng góp vào kho tàng lịch sử nhân loại"
      ]
    }
  ]

  const lessons = [
    {
      icon: Shield,
      title: "Về phân tích lịch sử",
      points: [
        "Phải dựa trên sự kiện khách quan, không cảm tính",
        "Cần xem xét toàn diện các yếu tố tác động",
        "Phân biệt rõ bản chất và hiện tượng"
      ]
    },
    {
      icon: Heart,
      title: "Về đấu tranh cách mạng",
      points: [
        "Cần có đường lối đúng đắn và kiên định",
        "Phải dựa vào sức mạnh của nhân dân",
        "Kết hợp đấu tranh chính trị và vũ trang"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Kết luận và nhận định
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Kết luận khoa học</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dựa trên phân tích toàn diện, chúng ta đưa ra kết luận khách quan
            về tính chất cuộc đấu tranh trong giai đoạn 1954-1965 ở Việt Nam.
          </p>
        </motion.div>

        {/* Main Conclusion */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-full float-animation"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-white bg-opacity-10 rounded-full float-animation-delayed"></div>
            <div className="absolute top-1/2 left-8 w-8 h-8 vietnam-flag-colors rounded-full opacity-30 float-animation"></div>

            <div className="text-center relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center pulse-glow"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {mainConclusion.title}
              </h2>
              <p className="text-xl text-red-100 leading-relaxed max-w-4xl mx-auto mb-8">
                {mainConclusion.description}
              </p>
              
              {/* Nhận định trực tiếp về câu hỏi */}
              <div className="bg-white/20 rounded-xl p-6 mt-8">
                <h3 className="text-2xl font-bold mb-4">NHẬN ĐỊNH VỀ QUAN ĐIỂM "NỘI CHIẾN"</h3>
                <div className="text-lg leading-relaxed space-y-4">
                  <p className="font-semibold">
                    <span className="text-yellow-300">❌ QUAN ĐIỂM "NỘI CHIẾN" KHÔNG ĐÚNG</span>
                  </p>
                  <p>
                    Dựa trên phân tích các dữ kiện lịch sử, chúng tôi khẳng định rằng quan điểm cho rằng 
                    giai đoạn 1954-1965 ở Việt Nam là "nội chiến" <strong>KHÔNG ĐÚNG</strong> vì:
                  </p>
                  <ul className="text-left space-y-2 max-w-3xl mx-auto">
                    <li>• <strong>Có sự can thiệp của Mỹ từ năm 1954</strong> - vi phạm định nghĩa "nội chiến"</li>
                    <li>• <strong>Chính quyền Việt Nam Cộng hòa không chính danh</strong> - được Mỹ dựng lên</li>
                    <li>• <strong>Bản chất thực sự là chiến tranh giải phóng dân tộc</strong> chống ngoại xâm</li>
                    <li>• <strong>Nhân dân miền Nam ủng hộ thống nhất</strong> - không phải xung đột nội bộ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Main Basis */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ba căn cứ chính
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Theoretical Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">A. Căn cứ lý luận</h3>
              </div>
              <ul className="space-y-4">
                {theoreticalBasis.map((basis, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{basis}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Practical Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">B. Căn cứ thực tiễn</h3>
              </div>
              <ul className="space-y-4">
                {practicalBasis.map((basis, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{basis}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Value Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">C. Căn cứ giá trị</h3>
              </div>
              <ul className="space-y-4">
                {valueBasis.map((basis, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{basis}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Characteristics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Đặc điểm của cuộc đấu tranh 1954-1965
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characteristics.map((char, index) => {
              const Icon = char.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{char.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {char.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Historical Significance */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ý nghĩa lịch sử
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalSignificance.map((significance, index) => {
              const Icon = significance.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{significance.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {significance.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Bài học rút ra
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessons.map((lesson, index) => {
              const Icon = lesson.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{lesson.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {lesson.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <Lightbulb className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Final Answer to the Question */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">TRẢ LỜI CÂU HỎI CHỦ ĐỀ</h2>
            <div className="text-lg leading-relaxed max-w-4xl mx-auto">
              <p className="mb-4">
                <strong>Câu hỏi:</strong> "Có quan điểm cho rằng giai đoạn 1954–1965 ở Việt Nam là giai đoạn nội chiến. 
                Các bạn hãy phân tích các dữ kiện lịch sử và đưa ra nhận định của mình về quan điểm trên."
              </p>
              <div className="bg-white/20 rounded-xl p-6 mt-6">
                <p className="text-xl font-bold mb-4">NHẬN ĐỊNH CUỐI CÙNG:</p>
                <p className="text-2xl font-bold text-yellow-300 mb-4">
                  ❌ QUAN ĐIỂM "NỘI CHIẾN" LÀ KHÔNG ĐÚNG
                </p>
                <p className="text-lg">
                  Dựa trên phân tích toàn diện các dữ kiện lịch sử, chúng tôi kết luận rằng 
                  <strong> giai đoạn 1954-1965 ở Việt Nam KHÔNG PHẢI là nội chiến</strong> mà là 
                  <strong> cuộc chiến tranh giải phóng dân tộc chống chủ nghĩa thực dân mới của Mỹ</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Flag className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-bold">Tự hào truyền thống dân tộc</h2>
              <Flag className="w-8 h-8" />
            </div>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Tài liệu này cung cấp khung phân tích toàn diện về giai đoạn 1954-1965 ở Việt Nam,
              giúp làm rõ tính chất thực sự của cuộc đấu tranh trong thời kỳ này và khẳng định
              quan điểm khoa học, khách quan về lịch sử dân tộc.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full">
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="font-semibold">Lịch sử Đảng Cộng sản Việt Nam</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConclusionPage
