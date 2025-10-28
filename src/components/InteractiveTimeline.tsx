import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, Zap, Info } from 'lucide-react'
import { timelineEvents } from '../data/timelineData'

const InteractiveTimeline = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAiInsights, setShowAiInsights] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const currentEvent = timelineEvents[currentIndex]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= timelineEvents.length - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 3000) // 3 seconds per event
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const handlePlay = () => {
    if (currentIndex >= timelineEvents.length - 1) {
      setCurrentIndex(0)
    }
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentIndex(0)
  }

  const generateAiInsight = (event: typeof currentEvent) => {
    const insights = [
      `Sự kiện "${event.title}" có tầm quan trọng trong việc định hình bối cảnh chính trị giai đoạn này.`,
      `Phân tích AI: Sự kiện này thuộc lĩnh vực ${event.category}, ảnh hưởng trực tiếp đến quan hệ quốc tế và chính sách trong nước.`,
      `Điểm nhấn: ${event.description} - Đây là bước ngoặt quan trọng trong chuỗi sự kiện dẫn đến leo thang xung đột.`,
      `Kết nối lịch sử: Sự kiện này có mối liên hệ mật thiết với các quyết định chính trị và quân sự của thời kỳ Chiến tranh Lạnh.`
    ]
    return insights[Math.floor(Math.random() * insights.length)]
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-blue-600" />
          Timeline AI Interactive
        </h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowAiInsights(!showAiInsights)}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              showAiInsights ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
            }`}
            title="AI Insights"
          >
            <Info className="w-5 h-5" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={handlePlay}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isPlaying
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 mr-2 inline" />
                Tạm dừng
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2 inline" />
                {currentIndex >= timelineEvents.length - 1 ? 'Phát lại' : 'Phát'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Tiến độ</span>
          <span>{currentIndex + 1} / {timelineEvents.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / timelineEvents.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Current Event Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-blue-600">
                {currentEvent.date}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                'bg-green-100 text-green-700'
              }`}>
                Quan trọng
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {currentEvent.title}
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              {currentEvent.description}
            </p>

            {/* Details */}
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-900">Chi tiết:</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentEvent.details.slice(0, 4).map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {currentEvent.details.length > 4 && (
                <p className="text-sm text-gray-500 italic">
                  Và {currentEvent.details.length - 4} điểm khác...
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* AI Insights */}
      <AnimatePresence>
        {showAiInsights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Zap className="w-5 h-5 text-purple-600" />
              <h5 className="font-semibold text-purple-900">AI Insight</h5>
            </div>
            <p className="text-purple-800 leading-relaxed">
              {generateAiInsight(currentEvent)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {timelineEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 scale-125'
                : index < currentIndex
                ? 'bg-blue-300'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default InteractiveTimeline
