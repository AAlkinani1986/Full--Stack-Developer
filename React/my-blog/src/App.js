import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div ClassName="App">
        <h1>My Awesome App</h1>

        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/article/:article" element={<ArticlePage />} />
            <Route element={NotFoundPage} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
