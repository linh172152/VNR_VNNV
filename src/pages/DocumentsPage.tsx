import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  ExternalLink,
  Calendar,
  Filter,
  Search,
  BookOpen,
  Scale,
  ScrollText,
  UserCheck,
  BarChart3,
  Star,
  // Clock, // Unused for now
  Globe
} from 'lucide-react'
import { historicalDocuments } from '../data/documentsData'
import type { HistoricalDocument } from '../types'

const DocumentsPage = () => {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedImportance, setSelectedImportance] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const documentTypes = [
    { value: 'all', label: 'Tất cả', icon: FileText },
    { value: 'agreement', label: 'Tác phẩm', icon: Scale },
    { value: 'law', label: 'Văn kiện', icon: ScrollText },
    { value: 'report', label: 'Báo cáo', icon: BarChart3 },
    { value: 'memoir', label: 'Hồi ký', icon: UserCheck },
    { value: 'study', label: 'Nghiên cứu', icon: BookOpen }
  ]

  const importanceLevels = [
    { value: 'all', label: 'Tất cả mức độ', color: 'bg-gray-500' },
    { value: 'primary', label: 'Chính', color: 'bg-red-500' },
    { value: 'secondary', label: 'Phụ', color: 'bg-yellow-500' },
    { value: 'supplementary', label: 'Bổ sung', color: 'bg-green-500' }
  ]

  const filteredDocuments = historicalDocuments.filter(doc => {
    const matchesType = selectedType === 'all' || doc.type === selectedType
    const matchesImportance = selectedImportance === 'all' || doc.importance === selectedImportance
    const matchesSearch = searchTerm === '' ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesType && matchesImportance && matchesSearch
  })

  const getDocumentIcon = (type: HistoricalDocument['type']) => {
    switch (type) {
      case 'agreement': return Scale
      case 'law': return ScrollText
      case 'report': return BarChart3
      case 'memoir': return UserCheck
      case 'study': return BookOpen
      default: return FileText
    }
  }

  const getImportanceColor = (importance: HistoricalDocument['importance']) => {
    switch (importance) {
      case 'primary': return 'border-red-500 bg-red-50'
      case 'secondary': return 'border-yellow-500 bg-yellow-50'
      case 'supplementary': return 'border-green-500 bg-green-50'
      default: return 'border-gray-500 bg-gray-50'
    }
  }

  const getImportanceBadge = (importance: HistoricalDocument['importance']) => {
    switch (importance) {
      case 'primary': return { label: 'Chính', color: 'bg-red-500 text-white' }
      case 'secondary': return { label: 'Phụ', color: 'bg-yellow-500 text-white' }
      case 'supplementary': return { label: 'Bổ sung', color: 'bg-green-500 text-white' }
      default: return { label: 'Khác', color: 'bg-gray-500 text-white' }
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Tài liệu tham khảo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Nguồn tài liệu tham khảo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tổng hợp các tài liệu, văn kiện và nghiên cứu học thuật đáng tin cậy
            về giai đoạn 1954-1965 ở Việt Nam.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Lọc theo loại tài liệu</h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {documentTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedType === type.value
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{type.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Importance Filter */}
            <div className="flex items-center space-x-3 mb-4">
              <Star className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Lọc theo mức độ quan trọng</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {importanceLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setSelectedImportance(level.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedImportance === level.value
                      ? `${level.color} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <span className="text-gray-600">
              Hiển thị <span className="font-semibold text-blue-600">{filteredDocuments.length}</span> tài liệu
              {searchTerm && (
                <span> cho từ khóa "<span className="font-semibold">{searchTerm}</span>"</span>
              )}
            </span>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDocuments.map((document, index) => {
              const Icon = getDocumentIcon(document.type)
              const importanceBadge = getImportanceBadge(document.importance)

              return (
                <motion.div
                  key={document.id}
                  className={`bg-white rounded-2xl shadow-lg hover-lift cursor-pointer border-l-4 ${getImportanceColor(document.importance)} document-card overflow-hidden`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  layout
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500">{document.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${importanceBadge.color}`}>
                        {importanceBadge.label}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {document.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {document.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        {document.type === 'agreement' && <Scale className="w-4 h-4 text-blue-600" />}
                        {document.type === 'law' && <ScrollText className="w-4 h-4 text-purple-600" />}
                        {document.type === 'report' && <BarChart3 className="w-4 h-4 text-green-600" />}
                        {document.type === 'memoir' && <UserCheck className="w-4 h-4 text-orange-600" />}
                        {document.type === 'study' && <BookOpen className="w-4 h-4 text-indigo-600" />}
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {documentTypes.find(t => t.value === document.type)?.label}
                        </span>
                      </div>

                      {document.url && (
                        <a
                          href={document.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-sm font-medium">Xem</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy tài liệu
            </h3>
            <p className="text-gray-600 mb-6">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem thêm kết quả.
            </p>
            <button
              onClick={() => {
                setSelectedType('all')
                setSelectedImportance('all')
                setSearchTerm('')
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Xóa bộ lọc
            </button>
          </motion.div>
        )}

        {/* Statistics */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Thống kê tài liệu
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {historicalDocuments.length}
              </div>
              <div className="text-purple-100">Tổng số tài liệu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {historicalDocuments.filter(d => d.importance === 'primary').length}
              </div>
              <div className="text-purple-100">Tài liệu chính</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {historicalDocuments.filter(d => d.url).length}
              </div>
              <div className="text-purple-100">Có liên kết</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {documentTypes.length - 1}
              </div>
              <div className="text-purple-100">Loại tài liệu</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Lưu ý về tài liệu</h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Các tài liệu được sưu tập và phân loại dựa trên mức độ tin cậy và giá trị lịch sử.
              Tài liệu "Chính" là những nguồn có giá trị cao nhất, "Phụ" hỗ trợ phân tích,
              và "Bổ sung" cung cấp thông tin tham khảo thêm.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DocumentsPage
