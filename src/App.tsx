import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import EmployersPage from './pages/employers';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/employers" element={<EmployersPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
