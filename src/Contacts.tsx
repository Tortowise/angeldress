import { Link } from 'react-router-dom'
import './Contacts.css'

function Contacts() {
    return (
        <div className="contacts-page">
            {/* Header */}
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="logo">
                        <span className="logo-text">𝒟𝒶𝓇𝒾𝒶</span>
                    </Link>
                    <nav className="navigation">
                        <Link to="/" className="nav-link">ГЛАВНАЯ</Link>
                        <Link to="/catalog" className="nav-link">ПОДОБРАТЬ ПЛАТЬЕ</Link>
                        <Link to="/accessories" className="nav-link">АКСЕССУАРЫ</Link>
                        <Link to="/blog" className="nav-link">БЛОГ</Link>
                        <Link to="/about" className="nav-link">О НАС</Link>
                        <Link to="/contacts" className="nav-link active">КОНТАКТЫ</Link>
                        <Link to="/size" className="nav-link">УЗНАТЬ БОЛЬШЕ</Link>
                    </nav>
                    <div className="header-right">
                        <div className="heart-icon">♡</div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1 className="hero-title">Контакты</h1>
                    <div className="breadcrumb">
                        <Link to="/">ГЛАВНАЯ</Link>
                        <span className="separator">|</span>
                        <span>КОНТАКТЫ</span>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contact-info-section">
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-left">
                            <p className="contact-subtitle">НАС МОЖНО НАЙТИ</p>
                            <h2 className="contact-title">Связать С Нами По Любым Вопросам</h2>

                            <div className="contact-grid">
                                <div className="contact-item">
                                    <div className="contact-icon">📷</div>
                                    <div className="contact-details">
                                        <h3>@ANGELDRESS_RU</h3>
                                        <p>Найдите нас в Instagram</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">💬</div>
                                    <div className="contact-details">
                                        <h3>INFO@EXAMPLE.COM</h3>
                                        <p>Напишите нам</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📱</div>
                                    <div className="contact-details">
                                        <h3>+785-000-000-000</h3>
                                        <p>Позвоните нам</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">☎️</div>
                                    <div className="contact-details">
                                        <h3>+785-000-000-000</h3>
                                        <p>Позвоните нам</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">✉️</div>
                                    <div className="contact-details">
                                        <h3>INFO@EXAMPLE.COM</h3>
                                        <p>Напишите нам</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-details">
                                        <h3>УЛ. МОСКОВСКАЯ 64/1</h3>
                                        <p>Приезжайте платье в Шоу-рум</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.8847!2d37.600089979353086!3d55.74764845381829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ0JzUxLjUiTiAzN8KwMzYnMDAuMyJF!5e0!3m2!1sen!2s!4v1642012345678!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps - УЛ. МОСКОВСКАЯ 64/1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="form-container">
                    <h2 className="form-title">Оставьте Заявку</h2>
                    <p className="form-subtitle">Разные образы, разработанные изящной долей элегант, рациональное сочетание</p>

                    <form className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Имя и Фамилию"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                placeholder="Номер телефона"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-checkbox">
                            <input type="checkbox" id="privacy" required />
                            <label htmlFor="privacy">Принимаю условия обработки данных</label>
                        </div>

                        <button type="submit" className="form-submit">
                            ЗАРЕГИСТРИРОВАТЬ ПРИМЕРКУ
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
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
                            <a href="https://instagram.com/angeldress_ru" className="social-link">📷</a>
                            <a href="https://wa.me/785000000000" className="social-link">💬</a>
                            <a href="https://t.me/785000000000" className="social-link">📱</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Daria Novík © 2025. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Contacts
