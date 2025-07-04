import type React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './LearnMore.css'

const LearnMore: React.FC = () => {
    return (
        <div className="learn-more">
            <Header currentPage="size" />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Узнайте больше</h1>
                    <div className="breadcrumb">
                        <span>ГЛАВНАЯ</span>
                        <span className="separator">|</span>
                        <span>УЗНАТЬ БОЛЬШЕ</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="main-content">
                <div className="content-container">
                    {/* Rental Rules Section */}
                    <section className="rental-rules">
                        <h2 className="section-title">Правила Проката Платьев</h2>
                        <ol className="rules-list">
                            <li>
                                Разные образы, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный
                                национальный проект
                            </li>
                            <li>
                                Разные образы, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный
                                национальный проект
                            </li>
                            <li>
                                Разные образы, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный
                                национальный проект
                            </li>
                        </ol>
                    </section>

                    {/* FAQ Section */}
                    <section className="faq-section">
                        <h2 className="section-title">Часто Задаваемые Вопросы</h2>

                        <div className="faq-item">
                            <h3 className="faq-question">Разным образом, разработанное ?</h3>
                            <p className="faq-answer">
                                Разным образом, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-
                                ориентированный национальный проект
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">Разным образом, разработанное ?</h3>
                            <p className="faq-answer">
                                Разным образом, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-
                                ориентированный национальный проект
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">Разным образом, разработанное ?</h3>
                            <p className="faq-answer">
                                Разным образом, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-
                                ориентированный национальный проект
                            </p>
                        </div>
                    </section>

                    {/* Terms Section */}
                    <section className="terms-section">
                        <h2 className="section-title">Условия Пользования</h2>
                        <ol className="terms-list">
                            <li>
                                Разные образы, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный
                                национальный проект
                            </li>
                            <li>
                                Разные образы, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный
                                национальный проект
                            </li>
                            <li>
                                Разные образы, разработанное изящной долей элегант, рациональное мышление является качественно новой ступенью позиций,
                                занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный
                                национальный проект
                            </li>
                        </ol>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default LearnMore
