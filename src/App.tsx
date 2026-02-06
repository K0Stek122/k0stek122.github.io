import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import EmployersPage from './pages/employers';
import PortfolioPage from './pages/portfolio';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/employers/portfolio" element={<PortfolioPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
