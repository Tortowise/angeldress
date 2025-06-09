import { Link } from 'react-router-dom'
import './App.css'

function About() {
    return (
        <div className="app">
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
                        <Link to="/about" className="nav-link active">О НАС</Link>
                         <Link to="/contact" className="nav-link">КОНТАКТЫ</Link>
                         <Link to="/size" className="nav-link">УЗНАТЬ БОЛЬШЕ</Link>
                    </nav>
                    <div className="header-right">
                        <div className="heart-icon">♡</div>
                    </div>
                </div>
            </header>

            {/* About Page Content */}
            <main className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="about-hero-content">
                        <h1>О нас</h1>
                        <p>главная • о нас</p>
                    </div>
                </section>

                {/* About Content */}
                <div className="about-content">
                    {/* First Section */}
                    <section className="about-section">
                        <div className="about-text">
                            <h3>НЕМНОГО О ANGEL DRESS</h3>
                            <h2>Добро Пожаловать В AngelDress</h2>
                            <p>Элегант образы, разработанные изящной долей элегант, рациональное
                                сочетание является известностю новой ступенью позиций, занимаемых
                                участниками в отношении поставленных задач. Повседневная практика
                                показывает, что курс на социально-ориентированный национальный проект.</p>
                            <div className="founder-name">Анжела Анжела</div>
                            <div className="founder-title">ОСНОВАТЕЛЬ</div>
                        </div>
                        <div className="about-image">
                            <img src="https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg" alt="Founder" />
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="testimonials-section">
                        <div className="testimonials-content">
                            <h3>НАШИ КЛИЕНТЫ</h3>
                            <h2>Что Говорят О Нас Наши Клиенты</h2>
                            <p>Отзывы клиентов, которые работали с нами и готовы поделиться
                                впечатлениями от нашего обслуживания.</p>
                            <div className="founder-name">Екатерина Царская</div>

                            <div className="testimonials-grid">
                                <div className="testimonial-item" style={{background: 'url(https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg) center/cover'}}>
                                </div>
                                <div className="testimonial-item" style={{background: 'url(https://ugc.same-assets.com/gRlxddwGAElgXHqorSFhl4hNat12cXAJ.jpeg) center/cover'}}>
                                </div>
                                <div className="testimonial-item" style={{background: 'url(https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg) center/cover'}}>
                                </div>
                                <div className="testimonial-item" style={{background: 'url(https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg) center/cover'}}>
                                </div>
                                <div className="testimonial-item" style={{background: 'url(https://ugc.same-assets.com/gRlxddwGAElgXHqorSFhl4hNat12cXAJ.jpeg) center/cover'}}>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Specialists Section */}
                    <section className="specialists-section">
                        <div className="specialists-content">
                            <h3>НАШИ СПЕЦИАЛИСТЫ</h3>
                            <h2>Наши Специалисты Помогут Вам Со Всем</h2>

                            <div className="specialists-grid">
                                <div className="specialist-item">
                                    <img src="https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg" alt="Марина Крайнова" />
                                    <h4>Марина Крайнова</h4>
                                    <p>В процессе, конечно, глубокий уровень погружения способствует
                                        подготовке к индивидуальной решении.</p>
                                    <div className="specialist-social">
                                        <a href="#instagram">📷</a>
                                        <a href="#twitter">🐦</a>
                                        <a href="#facebook">📘</a>
                                    </div>
                                </div>
                                <div className="specialist-item">
                                    <img src="https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg" alt="Марина Крайнова" />
                                    <h4>Марина Крайнова</h4>
                                    <p>В процессе, конечно, глубокий уровень погружения способствует
                                        подготовке и необходимые обеспечение.</p>
                                    <div className="specialist-social">
                                        <a href="#instagram">📷</a>
                                        <a href="#twitter">🐦</a>
                                        <a href="#facebook">📘</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="stats-section">
                        <div className="stats-content">
                            <div className="stat-item">
                                <div className="stat-icon">👗</div>
                                <div className="stat-number">132</div>
                                <div className="stat-label">Платьев Взяло Напрокат</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">💝</div>
                                <div className="stat-number">64</div>
                                <div className="stat-label">Довольных Клиента</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">🎁</div>
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Новых Поступлений Ежемесячно</div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Платья в прокат</h3>
                        <ul>
                            <li><a href="#evening">Вечерние</a></li>
                            <li><a href="#cocktail">Коктейль</a></li>
                            <li><a href="#long">Длинные</a></li>
                            <li><a href="#cocktail-2">Коктейльные</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Покупателям</h3>
                        <ul>
                            <li><a href="#contact">Написать нам</a></li>
                            <li><a href="#faq">Часто задаваемые вопросы</a></li>
                            <li><a href="#terms">Политика офертации</a></li>
                            <li><a href="#privacy">Политика конфиденциальности</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>О нас</h3>
                        <ul>
                            <li><a href="#company">Наша компания</a></li>
                            <li><a href="#careers">Вступить в команду</a></li>
                            <li><a href="#partnership">Сотрудничество</a></li>
                            <li><a href="#media">Скидки</a></li>
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
        </div>
    )
}

export default About
