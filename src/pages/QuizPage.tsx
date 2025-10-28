import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Target,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Award,
  Star
} from 'lucide-react'
import { quizQuestions, quizCategories, difficultyLevels } from '../data/quizData'

interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [timeSpent, setTimeSpent] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  const filteredQuestions = quizQuestions.filter(question => {
    const matchesCategory = selectedCategory === 'all' || question.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty
    return matchesCategory && matchesDifficulty
  })

  const currentQuestion = filteredQuestions[currentQuestionIndex]
  const totalQuestions = filteredQuestions.length

  // Timer
  useEffect(() => {
    let interval: number
    if (quizStarted && !quizCompleted && !showResult) {
      interval = window.setInterval(() => {
        setTimeSpent(prev => prev + 1)
      }, 1000)
    }
    return () => window.clearInterval(interval)
  }, [quizStarted, quizCompleted, showResult])

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setQuizResults([])
    setTimeSpent(0)
    setQuizCompleted(false)
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizResults([])
    setTimeSpent(0)
    setQuizCompleted(false)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent: timeSpent
    }

    setQuizResults(prev => [...prev, result])
    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Safety check for currentQuestion
  if (!currentQuestion && quizStarted && !quizCompleted) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Lỗi: Không tìm thấy câu hỏi</h1>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Quay lại
          </button>
        </div>
      </div>
    )
  }

  const calculateScore = () => {
    const correctAnswers = quizResults.filter(result => result.isCorrect).length
    return {
      correct: correctAnswers,
      total: totalQuestions,
      percentage: Math.round((correctAnswers / totalQuestions) * 100)
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return 'Xuất sắc! 🎉'
    if (percentage >= 80) return 'Tốt lắm! 👏'
    if (percentage >= 70) return 'Khá tốt! 👍'
    if (percentage >= 60) return 'Ổn! 😊'
    return 'Cần cố gắng thêm! 💪'
  }

  // Quiz Setup Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Câu hỏi ôn tập
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Kiểm tra kiến thức</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ôn tập và kiểm tra hiểu biết về tư tưởng Hồ Chí Minh thông qua {quizQuestions.length} câu hỏi tương tác
            </p>
          </motion.div>

          {/* Quiz Setup */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tùy chọn bài kiểm tra
            </h2>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Chọn chủ đề:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Tất cả ({quizQuestions.length})
                </button>
                {quizCategories.map((category) => {
                  const count = quizQuestions.filter(q => q.category === category.id).length
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? `${category.color} text-white`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({count})
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Chọn độ khó:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedDifficulty('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedDifficulty === 'all'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Tất cả
                </button>
                {difficultyLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedDifficulty(level.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedDifficulty === level.id
                        ? `${level.color} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="bg-blue-50 rounded-xl p-4 text-center hover-lift"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{filteredQuestions.length}</div>
                <div className="text-blue-700 text-sm">Câu hỏi</div>
              </motion.div>
              <motion.div
                className="bg-green-50 rounded-xl p-4 text-center hover-lift"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">~{filteredQuestions.length * 2}</div>
                <div className="text-green-700 text-sm">Phút</div>
              </motion.div>
              <motion.div
                className="bg-purple-50 rounded-xl p-4 text-center hover-lift"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">80%+</div>
                <div className="text-purple-700 text-sm">Đạt tốt</div>
              </motion.div>
            </div>

            {/* Start Button */}
            <div className="text-center">
              <motion.button
                onClick={startQuiz}
                disabled={filteredQuestions.length === 0}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="w-5 h-5 mr-2" />
                Bắt đầu kiểm tra
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              {filteredQuestions.length === 0 && (
                <p className="text-red-600 text-sm mt-2">
                  Không có câu hỏi nào phù hợp với bộ lọc đã chọn
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Completed Screen
  if (quizCompleted) {
    const score = calculateScore()

    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hoàn thành bài kiểm tra!
              </h1>

              <div className={`text-6xl font-bold mb-4 ${getScoreColor(score.percentage)}`}>
                {score.percentage}%
              </div>

              <p className="text-xl text-gray-600 mb-6">
                {getScoreMessage(score.percentage)}
              </p>

              {/* Detailed Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-4">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{score.correct}</div>
                  <div className="text-green-700 text-sm">Câu đúng</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">{score.total - score.correct}</div>
                  <div className="text-red-700 text-sm">Câu sai</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{formatTime(timeSpent)}</div>
                  <div className="text-blue-700 text-sm">Thời gian</div>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="flex justify-center space-x-4 mb-8">
                {score.percentage >= 90 && (
                  <div className="flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">
                    <Star className="w-4 h-4 mr-2" />
                    Thành tích xuất sắc
                  </div>
                )}
                {score.percentage >= 80 && (
                  <div className="flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
                    <Award className="w-4 h-4 mr-2" />
                    Đạt mức tốt
                  </div>
                )}
                {timeSpent < totalQuestions * 60 && (
                  <div className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                    <Clock className="w-4 h-4 mr-2" />
                    Nhanh chóng
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Làm lại
                </button>
                <button
                  onClick={() => {/* Navigate to study materials */}}
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ôn tập thêm
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Question Screen
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Câu {currentQuestionIndex + 1}/{totalQuestions}
            </h1>
            <div className="text-gray-600">
              {formatTime(timeSpent)}
            </div>
          </div>
          <button
            onClick={resetQuiz}
            className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            {/* Question Category & Difficulty */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                  quizCategories.find(cat => cat.id === currentQuestion.category)?.color || 'bg-gray-500'
                }`}>
                  {quizCategories.find(cat => cat.id === currentQuestion.category)?.name}
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                  difficultyLevels.find(level => level.id === currentQuestion.difficulty)?.color || 'bg-gray-500'
                }`}>
                  {difficultyLevels.find(level => level.id === currentQuestion.difficulty)?.name}
                </div>
              </div>
            </div>

            {/* Question */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-300 "

                if (showResult) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800"
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                    buttonClass += "border-red-500 bg-red-50 text-red-800"
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-600"
                  }
                } else if (selectedAnswer === index) {
                  buttonClass += "border-blue-500 bg-blue-50 text-blue-800"
                } else {
                  buttonClass += "border-gray-200 bg-white text-gray-800 hover:border-blue-300 hover:bg-blue-50"
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    disabled={showResult}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 font-semibold ${
                        showResult && index === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500 text-white' :
                        showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer ? 'border-red-500 bg-red-500 text-white' :
                        selectedAnswer === index ? 'border-blue-500 bg-blue-500 text-white' :
                        'border-gray-300 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="font-medium">{option}</span>
                      {showResult && index === currentQuestion.correctAnswer && (
                        <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                      )}
                      {showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-1">Giải thích:</h3>
                      <p className="text-yellow-700 leading-relaxed">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Câu trước
          </button>

          {!showResult ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Xác nhận đáp án
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              {currentQuestionIndex + 1 === totalQuestions ? 'Hoàn thành' : 'Câu tiếp theo'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizPage
