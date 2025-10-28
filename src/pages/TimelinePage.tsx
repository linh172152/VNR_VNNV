import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Users,
  Sword,
  Globe,
  Filter,
  ChevronDown,
  ChevronUp,
  Clock,
} from 'lucide-react'
import { timelineEvents } from '../data/timelineData'
import type { TimelineEvent } from '../types'

const TimelinePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const categories = [
    { value: 'all', label: 'Tất cả', color: 'bg-gray-500' },
    { value: 'political', label: 'Chính trị', color: 'bg-blue-500' },
    { value: 'military', label: 'Quân sự', color: 'bg-red-500' },
    { value: 'social', label: 'Xã hội', color: 'bg-green-500' },
    { value: 'international', label: 'Quốc tế', color: 'bg-purple-500' }
  ]

  const filteredEvents = selectedCategory === 'all'
    ? timelineEvents
    : timelineEvents.filter(event => event.category === selectedCategory)

  const getCategoryIcon = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'political': return Users
      case 'military': return Sword
      case 'social': return MapPin
      case 'international': return Globe
      default: return Calendar
    }
  }

  const getCategoryColor = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'political': return 'from-blue-500 to-blue-600'
      case 'military': return 'from-red-500 to-red-600'
      case 'social': return 'from-green-500 to-green-600'
      case 'international': return 'from-purple-500 to-purple-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Dòng thời gian lịch sử
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Giai đoạn 1954-1965</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Theo dõi các sự kiện quan trọng trong giai đoạn 1954-1965 ở Việt Nam,
            từ Hiệp định Geneva đến sự can thiệp của Mỹ.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Lọc theo danh mục</h3>
              </div>
              <div className="text-sm text-gray-500">
                {filteredEvents.length} sự kiện
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? `${category.color} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full shadow-lg"></div>

          {/* Animated timeline markers */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0">
            <div className="w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 pulse-glow"></div>
          </div>
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 bottom-0">
            <div className="w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2 pulse-glow"></div>
          </div>

          {/* Events */}
          <div className="space-y-12">
            <AnimatePresence>
              {filteredEvents.map((event, index) => {
                const Icon = getCategoryIcon(event.category)
                const isExpanded = expandedEvent === event.id
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={event.id}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    layout
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${getCategoryColor(event.category)} border-4 border-white shadow-lg flex items-center justify-center timeline-dot-animated`}></div>
                    </div>

                    {/* Event Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}>
                      <motion.div
                        className={`bg-white rounded-2xl shadow-lg hover-lift cursor-pointer border-l-4 border-gray-500 document-card`}
                        onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                        whileHover={{ scale: 1.03, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <motion.div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(event.category)} flex items-center justify-center shadow-md`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </motion.div>
                              <div>
                                <div className="text-sm font-medium text-blue-600 mb-1">
                                  {event.date}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">
                                  {event.title}
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {event.description}
                          </p>

                          {/* Expanded Details */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-gray-100 pt-4"
                              >
                                <h4 className="font-semibold text-gray-900 mb-3">
                                  Chi tiết quan trọng:
                                </h4>
                                <ul className="space-y-2">
                                  {event.details.map((detail, detailIndex) => (
                                    <motion.li
                                      key={detailIndex}
                                      className="flex items-start space-x-3 text-gray-700"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: detailIndex * 0.1 }}
                                    >
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>


        {/* Summary Statistics */}
        <motion.div
          className="mt-20 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tổng quan giai đoạn 1954-1964
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => {
              const count = timelineEvents.filter(event => event.category === category.value).length
              const percentage = Math.round((count / timelineEvents.length) * 100)

              return (
                <div key={category.value} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 ${category.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {count}
                  </div>
                  <div className="font-semibold text-gray-900">{category.label}</div>
                  <div className="text-gray-600 text-sm">{percentage}% tổng số sự kiện</div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TimelinePage
