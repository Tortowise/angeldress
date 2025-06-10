import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import About from './About'
import BlogPost from './BlogPost'
import Catalog from './Catalog'
import ProductDetail from './ProductDetail'
import Contacts from './Contacts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/blog" element={<App />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<ProductDetail />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    </StrictMode>,
)
