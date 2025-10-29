import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ChevronUp,
  FileText,
  BarChart3,
  Shield,
  Users,
  Gavel,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'
import { analysisData } from '../data/analysisData'

const AnalysisPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedViewpoint, _setSelectedViewpoint] = useState<'independence' | 'socialism' | 'comparison'>('comparison')

  // Viewpoints list (kept as reference for future UI controls)

  const getAnalysisIcon = (category: string) => {
    if (category.includes('độc lập')) return Gavel
    if (category.includes('xã hội')) return Users
    if (category.includes('kết hợp')) return Shield
    if (category.includes('thực tiễn')) return TrendingUp
    return BarChart3
  }

  const independenceData = analysisData.filter(item => item.id === 'national-independence-thought')
  const socialismData = analysisData.filter(item => item.id === 'socialist-thought')
  // Additional analysis data for future expansion
  // const otherAnalysis = analysisData.filter(item =>
  //   !['national-independence-thought', 'socialist-thought'].includes(item.id)
  // )

  const renderViewpointContent = () => {
    switch (selectedViewpoint) {
      case 'independence':
        return independenceData
      case 'socialism':
        return socialismData
      case 'comparison':
        return analysisData
      default:
        return analysisData
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Phân tích lịch sử
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Giai đoạn 1954-1965</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Phân tích sâu sắc về tính chất cuộc đấu tranh và quan điểm "nội chiến"
            trong giai đoạn 1954-1965 ở Việt Nam.
          </p>
        </motion.div>



        {/* Analysis Sections */}
        <div className="space-y-8">
          <AnimatePresence>
            {renderViewpointContent().map((analysis, index) => {
              const Icon = getAnalysisIcon(analysis.category)
              const isExpanded = expandedSection === analysis.id

              return (
                <motion.div
                  key={analysis.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  {/* Section Header */}
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setExpandedSection(isExpanded ? null : analysis.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {analysis.category}
                          </h3>
                          <p className="text-gray-600">{analysis.title}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-500">
                          {analysis.content.length} điểm phân tích
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-6 space-y-6">
                          {/* Content Points */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                              <FileText className="w-4 h-4 mr-2" />
                              Luận điểm chính
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {analysis.content.map((point, pointIndex) => (
                                <motion.div
                                  key={pointIndex}
                                  className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: pointIndex * 0.1 }}
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-white text-xs font-bold">
                                        {pointIndex + 1}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {point}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Evidence */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              Dẫn chứng lịch sử
                            </h4>
                            <div className="space-y-3">
                              {analysis.evidence.map((evidence, evidenceIndex) => (
                                <motion.div
                                  key={evidenceIndex}
                                  className="bg-green-50 rounded-lg p-4 border border-green-200"
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: evidenceIndex * 0.1 }}
                                >
                                  <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {evidence}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Counter Arguments (if available) */}
                          {analysis.counterArguments && analysis.counterArguments.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <XCircle className="w-4 h-4 mr-2" />
                                Phản biện
                              </h4>
                              <div className="space-y-3">
                                {analysis.counterArguments.map((counter, counterIndex) => (
                                  <motion.div
                                    key={counterIndex}
                                    className="bg-orange-50 rounded-lg p-4 border border-orange-200"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: counterIndex * 0.1 }}
                                  >
                                    <div className="flex items-start space-x-3">
                                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                      <p className="text-gray-700 text-sm leading-relaxed">
                                        {counter}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

export default AnalysisPage
