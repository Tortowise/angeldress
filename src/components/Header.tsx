import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
    currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">𝒟𝒶𝓇𝒾𝒶</span>
                </Link>
                <nav className="navigation">
                    <Link to="/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>ГЛАВНАЯ</Link>
                    <Link to="/catalog" className={`nav-link ${currentPage === 'catalog' ? 'active' : ''}`}>ПОДОБРАТЬ ПЛАТЬЕ</Link>
                    <Link to="/accessories" className={`nav-link ${currentPage === 'accessories' ? 'active' : ''}`}>АКСЕССУАРЫ</Link>
                    <Link to="/blog" className={`nav-link ${currentPage === 'blog' ? 'active' : ''}`}>БЛОГ</Link>
                    <Link to="/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>О НАС</Link>
                    <Link to="/contacts" className={`nav-link ${currentPage === 'contacts' ? 'active' : ''}`}>КОНТАКТЫ</Link>
                    <Link to="/size" className={`nav-link ${currentPage === 'size' ? 'active' : ''}`}>УЗНАТЬ БОЛЬШЕ</Link>
                </nav>
                <div className="header-right">
                    <div className="heart-icon">♡</div>
                </div>
            </div>
        </header>
    )
}
