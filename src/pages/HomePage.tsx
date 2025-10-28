import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Users,
  Globe,
  // BookOpen, // Removed since using Award icon for quiz link
  Target,
  // Lightbulb,
  Heart,
  Award,
  Flag,
  Star,
  Sword
} from 'lucide-react'

const HomePage = () => {
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

  const keyPoints = [
    {
      icon: Target,
      title: 'Vấn đề nghiên cứu',
      description: 'Phân tích quan điểm cho rằng giai đoạn 1954-1965 là "nội chiến" ở Việt Nam'
    },
    {
      icon: Calendar,
      title: 'Giai đoạn lịch sử',
      description: 'Từ Hiệp định Geneva 1954 đến khi Mỹ can thiệp quân sự trực tiếp năm 1965'
    },
    {
      icon: Globe,
      title: 'Bối cảnh quốc tế',
      description: 'Chiến tranh Lạnh và sự can thiệp của các cường quốc vào Việt Nam'
    },
    {
      icon: Users,
      title: 'Ý nghĩa lịch sử',
      description: 'Đánh giá tính chất thực sự của cuộc đấu tranh và vai trò của các bên tham gia'
    }
  ]

  // const features = [
  //   {
  //     icon: BookOpen,
  //     title: 'Tài liệu đầy đủ',
  //     description: 'Dựa trên các nguồn tài liệu lịch sử chính thức và đáng tin cậy',
  //     color: 'from-blue-500 to-cyan-500'
  //   },
  //   {
  //     icon: Lightbulb,
  //     title: 'Công nghệ hiện đại',
  //     description: 'Ứng dụng AI và công nghệ web để tăng trải nghiệm học tập',
  //     color: 'from-purple-500 to-pink-500'
  //   },
  //   {
  //     icon: Heart,
  //     title: 'Dễ tiếp cận',
  //     description: 'Thiết kế thân thiện, phù hợp với mọi đối tượng người dùng',
  //     color: 'from-green-500 to-emerald-500'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Khoa học khách quan',
  //     description: 'Phân tích dựa trên dữ kiện lịch sử và phương pháp khoa học',
  //     color: 'from-orange-500 to-red-500'
  //   }
  // ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-background">
        <div className="absolute inset-0 animated-bg opacity-15"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 float-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-25 float-animation-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 float-animation"></div>

        {/* Vietnam flag inspired decorative elements */}
        <div className="absolute top-1/3 right-10 w-8 h-8 vietnam-flag-colors rounded-full opacity-40 float-animation-delayed"></div>
        <div className="absolute bottom-1/3 left-16 w-6 h-6 vietnam-flag-colors rounded-full opacity-50 float-animation"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-8">
                <Award className="w-4 h-4 mr-2" />
                Sản phẩm môn học VNR202 - Nhóm VNNV
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient-solid">GIAI ĐOẠN 1954-1965</span>
              <br />
              <motion.span
                className="text-3xl md:text-4xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Việt Nam: "Nội chiến" hay Chiến tranh giải phóng?
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Phân tích các dữ kiện lịch sử để đưa ra nhận định về quan điểm cho rằng giai đoạn 1954-1965 
              ở Việt Nam là giai đoạn "nội chiến", với sự hỗ trợ của công nghệ hiện đại và trí tuệ nhân tạo.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/timeline"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 pulse-glow"
                >
                  Khám phá dòng thời gian
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/quiz"
                  className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
                >
                  Kiểm tra kiến thức
                  <Award className="ml-2 w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Points Section */}
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
              Những điểm quan trọng
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Phân tích các khía cạnh chính của giai đoạn 1954-1965 ở Việt Nam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg pulse-glow">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đặc điểm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Website được thiết kế với các tính năng hiện đại và phương pháp tiếp cận khoa học
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Historical Context with Images Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hình ảnh lịch sử
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những hình ảnh đặc trưng về giai đoạn 1954-1965 ở Việt Nam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Geneva Agreement */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/img1.jpg"
                  alt="Hiệp định Geneva 1954"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Calendar className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">1954</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hiệp định Geneva 1954</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kết thúc cuộc kháng chiến chống Pháp và chia đôi đất nước tại vĩ tuyến 17,
                  tạo ra hai chính quyền khác nhau ở hai miền.
                </p>
              </div>
            </motion.div>

            {/* Ngo Dinh Diem Regime */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/img3.jpg"
                  alt="Chế độ Ngô Đình Diệm"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Users className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">1954-1963</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Chế độ Ngô Đình Diệm</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Chính quyền Việt Nam Cộng hòa được Mỹ hậu thuẫn, từ chối tổng tuyển cử thống nhất
                  và thiết lập chế độ độc tài gia đình trị.
                </p>
              </div>
            </motion.div>

            {/* North Vietnam Construction */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/img4.jpg"
                  alt="Xây dựng miền Bắc"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Flag className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Miền Bắc</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Xây dựng chủ nghĩa xã hội ở miền Bắc</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Đảng lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc với cải cách ruộng đất,
                  hợp tác hóa nông nghiệp và phát triển giáo dục, y tế.
                </p>
              </div>
            </motion.div>

            {/* South Vietnam Resistance */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/img5.jpg"
                  alt="Đấu tranh miền Nam"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Sword className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Miền Nam</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Đấu tranh giải phóng miền Nam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nhân dân miền Nam đấu tranh chống chế độ Ngô Đình Diệm và sự can thiệp của Mỹ,
                  thành lập Mặt trận Dân tộc Giải phóng miền Nam.
                </p>
              </div>
            </motion.div>

            {/* US Intervention */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/img6.jpg"
                  alt="Can thiệp của Mỹ"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Globe className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">1961-1965</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can thiệp của Mỹ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mỹ tăng cường can thiệp vào Việt Nam từ gửi cố vấn quân sự đến đổ bộ lính trực tiếp,
                  bắt đầu cuộc chiến tranh cục bộ năm 1965.
                </p>
              </div>
            </motion.div>

            {/* Analysis Conclusion */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/img7.jpg"
                  alt="Phân tích và kết luận"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Heart className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Kết luận</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phân tích và kết luận</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dựa trên các dữ kiện lịch sử để đánh giá tính đúng đắn của quan điểm
                  "nội chiến" và đưa ra nhận định về bản chất thực sự của giai đoạn này.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Assistant Feature Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Tính năng AI sáng tạo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Trò chuyện với AI Lịch sử</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trải nghiệm học tập tương tác độc đáo với AI Assistant được huấn luyện về giai đoạn 1954-1965 ở Việt Nam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Chuyên gia lịch sử</h3>
                    <p className="text-gray-600 text-sm">
                      Trò chuyện với AI được huấn luyện chuyên sâu về giai đoạn 1954-1965 ở Việt Nam,
                      cung cấp thông tin chính xác và khách quan về các sự kiện lịch sử
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Kiến thức phong phú</h3>
                    <p className="text-gray-600 text-sm">
                      Được huấn luyện trên các tài liệu lịch sử về Hiệp định Geneva, chế độ Ngô Đình Diệm,
                      sự can thiệp của Mỹ và cuộc đấu tranh giải phóng miền Nam
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Tương tác thông minh</h3>
                    <p className="text-gray-600 text-sm">
                      Hỗ trợ giọng nói tiếng Việt, câu hỏi gợi ý thông minh
                      và phân tích sâu sắc về các sự kiện lịch sử giai đoạn 1954-1965
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Mock chat interface */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center space-x-3">
                  <img
                    src="/images/img2.svg"
                    alt="AI Lịch sử Việt Nam"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div>
                    <h4 className="font-semibold">AI Giai đoạn 1954-1965</h4>
                    <p className="text-xs opacity-90">Trợ lý AI chuyên về lịch sử Việt Nam</p>
                  </div>
                </div>

                <div className="p-4 space-y-4 h-64 overflow-hidden">
                                    <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-xs">
                      <p className="text-sm text-gray-800">
                        Xin chào! Tôi là AI chuyên về giai đoạn 1954-1965 ở Việt Nam. Tôi có thể giúp bạn
                        phân tích quan điểm "nội chiến" và các sự kiện lịch sử quan trọng. Bạn muốn tìm hiểu về vấn đề gì?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none max-w-xs">
                      <p className="text-sm">
                        Quan điểm "nội chiến" có đúng không khi có sự can thiệp của Mỹ?
                      </p>
                    </div>
                  </div>

                                    <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-xs">
                      <p className="text-sm text-gray-800">
                        Quan điểm "nội chiến" không phản ánh đúng bản chất vì từ đầu đã có sự can thiệp của Mỹ.
                        Đây thực chất là cuộc chiến tranh giải phóng dân tộc chống ngoại xâm...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 rounded-xl p-3">
                      <p className="text-sm text-gray-500">Đặt câu hỏi về giai đoạn 1954-1965...</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 float-animation-delayed"></div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sẵn sàng khám phá lịch sử với AI?
              </h3>
                            <p className="text-gray-600 mb-6">
                Nhấn vào biểu tượng chat ở góc dưới bên phải để bắt đầu cuộc trò chuyện
                với AI và khám phá những câu chuyện lịch sử hấp dẫn!
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  Trò chuyện tự nhiên
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  Hỗ trợ giọng nói
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  Phân tích thông minh
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Vấn đề nghiên cứu
            </h2>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Đặt vấn đề</h3>
              <blockquote className="text-lg md:text-xl text-gray-800 font-medium italic leading-relaxed mb-6">
                "Có ý kiến cho rằng thời kỳ 1954–1965 ở Việt Nam chưa có sự can thiệp trực tiếp của Mỹ, 
                hai miền tồn tại hai chính quyền khác nhau, đại diện cho hai ý chí đối lập, nên đây là một cuộc "nội chiến". 
                Vậy quan điểm đó có đúng đắn không, khi xét đến bản chất lịch sử của cách mạng Việt Nam trong giai đoạn này?"
              </blockquote>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Yêu cầu phân tích:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Trình bày đường lối của Đảng lãnh đạo cách mạng hai miền Nam – Bắc (1954–1965)</li>
                  <li>• Phân tích tính chất và mục tiêu của cuộc đấu tranh</li>
                  <li>• Đánh giá tính chính danh của chính quyền Việt Nam Cộng hòa</li>
                  <li>• Phân tích tình hình miền Nam để đưa ra kết luận</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Hiệp định</div>
                <div className="text-gray-600">Geneva 1954</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">Can thiệp</div>
                <div className="text-gray-600">của Mỹ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Bản chất</div>
                <div className="text-gray-600">thực sự</div>
              </div>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Các khía cạnh cần phân tích:</strong>
              </p>
              <ul className="text-left space-y-2 max-w-2xl mx-auto pl-32">
                <li>• Đường lối của Đảng lãnh đạo cách mạng hai miền</li>
                <li>• Tính chất và mục tiêu của cuộc đấu tranh</li>
                <li>• Tính chính danh của chính quyền Việt Nam Cộng hòa</li>
                <li>• Tình hình miền Nam và vai trò của các bên tham gia</li>
              </ul>
            </div>

            <motion.div
              className="mt-12"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/timeline"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Bắt đầu khám phá
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
