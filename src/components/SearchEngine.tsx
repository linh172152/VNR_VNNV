import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, Filter, X, BookOpen, Clock, Users, ArrowRight } from 'lucide-react'
import { timelineEvents } from '../data/timelineData'
import { historicalDocuments } from '../data/documentsData'
import { analysisData } from '../data/analysisData'

interface SearchResult {
  id: string
  title: string
  content: string
  section: 'timeline' | 'documents' | 'analysis'
  relevance: number
  metadata?: any
}

const SearchEngine = () => {
  const [query, setQuery] = useState('')
  const [selectedSection, setSelectedSection] = useState<'all' | 'timeline' | 'documents' | 'analysis'>('all')
  const [showAiSuggestions, setShowAiSuggestions] = useState(false)

  const aiSuggestions = [
    "Tư tưởng độc lập dân tộc của Hồ Chí Minh",
    "Chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh",
    "Sự kết hợp hai tư tưởng cốt lõi",
    "Ý nghĩa lịch sử của tư tưởng Hồ Chí Minh",
    "Tuyên ngôn độc lập và tư tưởng dân tộc"
  ]

  const searchResults = useMemo(() => {
    if (!query.trim()) return []

    const results: SearchResult[] = []
    const searchTerm = query.toLowerCase()

    // Search in timeline events
    if (selectedSection === 'all' || selectedSection === 'timeline') {
      timelineEvents.forEach(event => {
        let relevance = 0
        let content = event.description

        if (event.title.toLowerCase().includes(searchTerm)) relevance += 3
        if (event.description.toLowerCase().includes(searchTerm)) relevance += 2
        if (event.details.some(detail => detail.toLowerCase().includes(searchTerm))) {
          relevance += 1
          content += ' ' + event.details.join(' ')
        }

        if (relevance > 0) {
          results.push({
            id: event.id,
            title: event.title,
            content: event.description,
            section: 'timeline',
            relevance,
            metadata: { date: event.date, category: event.category }
          })
        }
      })
    }

    // Search in documents
    if (selectedSection === 'all' || selectedSection === 'documents') {
      historicalDocuments.forEach(doc => {
        let relevance = 0

        if (doc.title.toLowerCase().includes(searchTerm)) relevance += 3
        if (doc.description.toLowerCase().includes(searchTerm)) relevance += 2
        if (doc.type.toLowerCase().includes(searchTerm)) relevance += 1

        if (relevance > 0) {
          results.push({
            id: doc.id,
            title: doc.title,
            content: doc.description,
            section: 'documents',
            relevance,
            metadata: { type: doc.type, importance: doc.importance, date: doc.date }
          })
        }
      })
    }

    // Search in analysis
    if (selectedSection === 'all' || selectedSection === 'analysis') {
      analysisData.forEach(analysis => {
        let relevance = 0
        let content = analysis.title

        if (analysis.category.toLowerCase().includes(searchTerm)) relevance += 3
        if (analysis.title.toLowerCase().includes(searchTerm)) relevance += 2
        if (analysis.content.some(item => item.toLowerCase().includes(searchTerm))) {
          relevance += 2
          content += ' ' + analysis.content.join(' ')
        }
        if (analysis.evidence.some(item => item.toLowerCase().includes(searchTerm))) {
          relevance += 1
          content += ' ' + analysis.evidence.join(' ')
        }

        if (relevance > 0) {
          results.push({
            id: analysis.id,
            title: analysis.category,
            content: analysis.title,
            section: 'analysis',
            relevance,
            metadata: { category: analysis.category }
          })
        }
      })
    }

    return results.sort((a, b) => b.relevance - a.relevance).slice(0, 10)
  }, [query, selectedSection])

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text

    const regex = new RegExp(`(${searchTerm})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </span>
      ) : part
    )
  }

  const getSectionIcon = (section: SearchResult['section']) => {
    switch (section) {
      case 'timeline': return Clock
      case 'documents': return BookOpen
      case 'analysis': return Users
      default: return Search
    }
  }

  const getSectionLabel = (section: SearchResult['section']) => {
    switch (section) {
      case 'timeline': return 'Dòng thời gian'
      case 'documents': return 'Tài liệu'
      case 'analysis': return 'Phân tích'
      default: return 'Khác'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <Search className="w-5 h-5 mr-2 text-blue-600" />
          Tìm kiếm thông minh
        </h3>
        <button
          onClick={() => setShowAiSuggestions(!showAiSuggestions)}
          className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
            showAiSuggestions ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Suggestions</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Tìm kiếm sự kiện, tài liệu, phân tích..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Section Filter */}
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-4 h-4 text-gray-500" />
        <div className="flex space-x-1">
          {['all', 'timeline', 'documents', 'analysis'].map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section as any)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedSection === section
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section === 'all' ? 'Tất cả' : getSectionLabel(section as any)}
            </button>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <AnimatePresence>
        {showAiSuggestions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200"
          >
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Gợi ý tìm kiếm từ AI</span>
            </div>
            <div className="space-y-2">
              {aiSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(suggestion)}
                  className="block w-full text-left px-3 py-2 text-sm text-purple-800 hover:bg-purple-100 rounded-lg transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 text-sm text-gray-600">
              Tìm thấy <span className="font-semibold text-blue-600">{searchResults.length}</span> kết quả
              {query && (
                <span> cho "{highlightText(query, query)}"</span>
              )}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {searchResults.map((result, index) => {
                const Icon = getSectionIcon(result.section)
                return (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                          {getSectionLabel(result.section)}
                        </span>
                        <div className="flex">
                          {Array.from({ length: Math.min(result.relevance, 3) }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full mx-0.5" />
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-1">
                      {highlightText(result.title, query)}
                    </h4>

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {highlightText(result.content, query)}
                    </p>

                    {result.metadata && (
                      <div className="mt-2 flex items-center space-x-3 text-xs text-gray-500">
                        {result.metadata.date && (
                          <span>📅 {result.metadata.date}</span>
                        )}
                        {result.metadata.category && (
                          <span>🏷️ {result.metadata.category}</span>
                        )}
                        {result.metadata.type && (
                          <span>📄 {result.metadata.type}</span>
                        )}
                      </div>
                    )}
                  </motion.div>
                )
              })}

              {searchResults.length === 0 && query && (
                <div className="text-center py-8 text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Không tìm thấy kết quả phù hợp</p>
                  <p className="text-sm">Thử sử dụng từ khóa khác hoặc AI suggestions</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchEngine
