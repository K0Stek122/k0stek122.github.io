import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import IndexPage from './pages/index';
import EmployersPage from './pages/employers';
import './App.css'

function App() {

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/employers" element={<EmployersPage />} />
        </Routes>
    </HashRouter>
  )
}

export default App
