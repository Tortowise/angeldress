import { Link } from 'react-router-dom'
import './App.css'

interface BlogPost {
    id: number
    title: string
    image: string
    tags: string[]
    description: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "100 Идей На Лето",
        image: "https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg",
        tags: ["КРАСОТА", "ЖИЗНЕННЫЙ СТИЛЬ", "ПОПУЛЯРНОЕ"],
        description: "Разные образы, разработанные изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный национальный проект."
    },
    {
        id: 2,
        title: "100 Идей На Лето",
        image: "https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg",
        tags: ["КРАСОТА", "ЖИЗНЕННЫЙ СТИЛЬ", "ПОПУЛЯРНОЕ"],
        description: "Разные образы, разработанные изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный национальный проект."
    },
    {
        id: 3,
        title: "100 Идей На Лето",
        image: "https://ugc.same-assets.com/gRlxddwGAElgXHqorSFhl4hNat12cXAJ.jpeg",
        tags: ["КРАСОТА", "ЖИЗНЕННЫЙ СТИЛЬ", "ПОПУЛЯРНОЕ"],
        description: "Разные образы, разработанные изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный национальный проект."
    }
]

function App() {
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
                        <Link to="/blog" className="nav-link active">БЛОГ</Link>
                        <Link to="/about" className="nav-link">О НАС</Link>
                        <Link to="/contacts" className="nav-link">КОНТАКТЫ</Link>
                        <Link to="/size" className="nav-link">УЗНАТЬ БОЛЬШЕ</Link>
                    </nav>
                    <div className="header-right">
                        <div className="heart-icon">♡</div>
                    </div>
                </div>
            </header>

            {/* Blog Content */}
            <main className="blog-content">
                <div className="blog-posts">
                    {blogPosts.map((post, index) => (
                        <article key={post.id} className={`blog-post ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="post-content">
                                <h2 className="post-title">{post.title}</h2>
                                <div className="post-tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <p className="post-description">{post.description}</p>
                                <Link to={`/blog/${post.id}`} className="read-more-btn">ОТКРЫТЬ</Link>
                            </div>
                            <Link to={`/blog/${post.id}`} className="post-image">
                                <img src={post.image} alt={post.title} />
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                </div>
            </main>

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

export default App
