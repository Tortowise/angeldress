import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Платья в прокат</h3>
                    <ul>
                        <li><Link to="/dresses/evening">Вечерние</Link></li>
                        <li><Link to="/dresses/cocktail">Коктейль</Link></li>
                        <li><Link to="/dresses/long">Длинные</Link></li>
                        <li><Link to="/dresses/cocktail-2">Коктейльные</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Покупателям</h3>
                    <ul>
                        <li><Link to="/contacts">Написать нам</Link></li>
                        <li><Link to="/faq">Часто задаваемые вопросы</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/privacy">Политика конфиденциальности</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>О нас</h3>
                    <ul>
                        <li><Link to="/about">Наша компания</Link></li>
                        <li><Link to="/careers">Вступить в команду</Link></li>
                        <li><Link to="/terms">Соглашения</Link></li>
                        <li><Link to="/discounts">Скидки</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Мы в Соц. Сетях</h3>
                    <div className="social-links">
                        <a href="https://instagram.com" className="social-link">📷</a>
                        <a href="https://twitter.com" className="social-link">🐦</a>
                        <a href="https://tiktok.com" className="social-link">📱</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Daria Novík © 2025. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
