import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import TimelinePage from './pages/TimelinePage'
import AnalysisPage from './pages/AnalysisPage'
import ConclusionPage from './pages/ConclusionPage'
import QuizPage from './pages/QuizPage'
import DocumentsPage from './pages/DocumentsPage'
import AIUsagePage from './pages/AIUsagePage'
import ScrollToTop from './components/ScrollToTop'
import AIHistoricalAssistant from './components/AIHistoricalAssistant'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/conclusion" element={<ConclusionPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/ai-usage" element={<AIUsagePage />} />
          </Routes>
        </AnimatePresence>
      </div>

      {/* AI Historical Assistant - Available on all pages */}
      <AIHistoricalAssistant />
    </Router>
  )
}

export default App
