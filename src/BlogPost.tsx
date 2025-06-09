import { useParams, Link } from 'react-router-dom'
import './BlogPost.css'

interface BlogPostData {
    id: number
    title: string
    heroImage: string
    date: string
    readTime: string
    tags: string[]
    content: {
        paragraphs: string[]
        images: string[]
    }
    author: {
        name: string
        bio: string
        image: string
    }
}

const blogPostsData: Record<string, BlogPostData> = {
    '1': {
        id: 1,
        title: "100 Идей На Лето",
        heroImage: "https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg",
        date: "8 МАР",
        readTime: "5 мин чтения",
        tags: ["КРАСОТА", "ЖИЗНЕННЫЙ СТИЛЬ", "ПОПУЛЯРНОЕ"],
        content: {
            paragraphs: [
                "Разные образы, разработанные изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный национальный проект Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач.",
                "Повседневная практика показывает, что курс на социально-ориентированный национальный проект Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный национальный проект Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач.",
                "Повседневная практика показывает, что курс на социально-ориентированный национальный проект Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что курс на социально-ориентированный национальный проект Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач.",
                "Повседневная практика показывает, что курс на социально-ориентированный национальный проект Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач."
            ],
            images: [
                "https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg"
            ]
        },
        author: {
            name: "Марина Красивова",
            bio: "Разные образы, разработанное изящной долей элегант, рациональное сочетание является известностю новой ступенью позиций, занимаемых участниками в отношении поставленных задач.",
            image: "https://ugc.same-assets.com/gRlxddwGAElgXHqorSFhl4hNat12cXAJ.jpeg"
        }
    },
    '2': {
        id: 2,
        title: "100 Идей На Лето",
        heroImage: "https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg",
        date: "15 МАР",
        readTime: "7 мин чтения",
        tags: ["КРАСОТА", "ЖИЗНЕННЫЙ СТИЛЬ", "ПОПУЛЯРНОЕ"],
        content: {
            paragraphs: [
                "Летний сезон приносит множество возможностей для создания стильных и элегантных образов. В этой статье мы рассмотрим 100 идей, которые помогут вам выглядеть безупречно в любой ситуации.",
                "Начнем с базовых принципов летнего гардероба. Легкие ткани, воздушные силуэты и яркие акценты - вот основа успешного летнего стиля. Не забывайте о комфорте и практичности.",
                "Особое внимание стоит уделить аксессуарам. Правильно подобранные украшения, сумки и обувь могут полностью преобразить даже самый простой наряд.",
                "Цветовая палитра играет важную роль в летних образах. Светлые оттенки визуально охлаждают, а яркие цвета добавляют настроения и энергии."
            ],
            images: [
                "https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg"
            ]
        },
        author: {
            name: "Анна Модникова",
            bio: "Стилист с 10-летним опытом, специализируется на создании элегантных образов для особых случаев.",
            image: "https://ugc.same-assets.com/8wH0EKvu6Cx4UBqoI1LDAv5weRR53J3O.jpeg"
        }
    },
    '3': {
        id: 3,
        title: "100 Идей На Лето",
        heroImage: "https://ugc.same-assets.com/gRlxddwGAElgXHqorSFhl4hNat12cXAJ.jpeg",
        date: "22 МАР",
        readTime: "6 мин чтения",
        tags: ["КРАСОТА", "ЖИЗНЕННЫЙ СТИЛЬ", "ПОПУЛЯРНОЕ"],
        content: {
            paragraphs: [
                "Третий пост в нашей серии о летних образах посвящен вечерним нарядам. Когда солнце садится, пора блистать на вечерних мероприятиях.",
                "Выбор вечернего платья - это искусство. Важно учитывать не только фигуру, но и характер мероприятия, время года и личные предпочтения.",
                "Макияж и прическа должны гармонично дополнять образ. Летом предпочтение стоит отдавать естественности с яркими акцентами.",
                "Не забывайте о деталях: маникюр, парфюм и уверенность в себе - это то, что делает образ по-настоящему завершенным."
            ],
            images: [
                "https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg"
            ]
        },
        author: {
            name: "Елена Стильная",
            bio: "Fashion-блогер и консультант по стилю, автор популярного Instagram-аккаунта о моде.",
            image: "https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg"
        }
    }
}

const relatedPosts = [
    {
        id: 4,
        title: "100 Идей на лето",
        image: "https://ugc.same-assets.com/Y7SmBk3wfu7QDWrlyB0WtGkyFbOp_p34.jpeg"
    },
    {
        id: 5,
        title: "100 Идей на лето",
        image: "https://ugc.same-assets.com/3rn3TvoTwIjEQnXmKc2Om9WsdqfrrNuj.jpeg"
    }
]

export default function BlogPost() {
    const { id } = useParams<{ id: string }>()
    const post = id ? blogPostsData[id] : null

    if (!post) {
        return (
            <div className="post-not-found">
                <h1>Пост не найден</h1>
                <Link to="/blog">Вернуться к блогу</Link>
            </div>
        )
    }

    return (
        <div className="blog-post-page">
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
                        <Link to="/contact" className="nav-link">КОНТАКТЫ</Link>
                        <Link to="/size" className="nav-link">УЗНАТЬ БОЛЬШЕ</Link>
                    </nav>
                    <div className="header-right">
                        <div className="heart-icon">♡</div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="post-hero">
                <div className="hero-content">
                    <div className="breadcrumb">
                        <Link to="/">ГЛАВНАЯ</Link> | <Link to="/blog">БЛОГ</Link> | <span>КРАСОТА</span> | <span>ЖИЗНЕННЫЙ СТИЛЬ</span>
                    </div>
                    <h1 className="hero-title">{post.title}</h1>
                </div>
                <div className="hero-image">
                    <img src={post.heroImage} alt={post.title} />
                </div>
            </section>

            {/* Post Content */}
            <main className="post-content-wrapper">
                <div className="post-meta">
                    <div className="post-date">
                        <span className="date-box">{post.date}</span>
                    </div>
                    <div className="post-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <article className="post-article">
                    <h2 className="article-title">{post.title}</h2>

                    <div className="article-content">
                        <div className="content-image">
                            <img src={post.content.images[0]} alt="" />
                        </div>

                        <div className="content-text">
                            {post.content.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Tags and Social */}
                    <div className="post-footer">
                        <div className="post-tags-footer">
                            <span>Теги:</span>
                            {post.tags.map((tag) => (
                                <span key={tag} className="footer-tag">{tag.toLowerCase()}</span>
                            )).reduce((prev, curr, index) => index === 0 ? [curr] : [...prev, ', ', curr], [] as any)}
                        </div>
                        <div className="social-share">
                            <span>Автор: {post.author.name}</span>
                            <div className="social-icons">
                                <a href="https://instagram.com" className="social-icon">📷</a>
                                <a href="https://vk.com" className="social-icon">🔵</a>
                                <a href="https://youtube.com" className="social-icon">▶️</a>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Author Section */}
                <section className="author-section">
                    <div className="author-content">
                        <div className="author-info">
                            <span className="author-label">Об авторе</span>
                            <h3 className="author-name">{post.author.name}</h3>
                            <p className="author-bio">{post.author.bio}</p>
                        </div>
                        <div className="author-image">
                            <img src={post.author.image} alt={post.author.name} />
                        </div>
                    </div>
                </section>

                {/* Related Posts */}
                <section className="related-posts">
                    <h3 className="related-title">Вам Также Может Понравиться</h3>
                    <div className="related-grid">
                        {relatedPosts.map((relatedPost) => (
                            <div key={relatedPost.id} className="related-post">
                                <div className="related-image">
                                    <img src={relatedPost.image} alt={relatedPost.title} />
                                    <Link to={`/blog/${relatedPost.id}`} className="related-link">
                                        {relatedPost.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Платья в прокат</h3>
                        <ul>
                            <li><a href="/dresses/evening">Вечерние</a></li>
                            <li><a href="/dresses/cocktail">Коротки</a></li>
                            <li><a href="/dresses/long">Длинные</a></li>
                            <li><a href="/dresses/cocktail-2">Коктейльные</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Покупателям</h3>
                        <ul>
                            <li><a href="/contact">Написать нам</a></li>
                            <li><a href="/faq">Часто задаваемые вопросы</a></li>
                            <li><a href="/blog">Блог</a></li>
                            <li><a href="/privacy">Политика конфиденциальности</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>О нас</h3>
                        <ul>
                            <li><a href="/about">Наша компания</a></li>
                            <li><a href="/careers">Вступить в команду</a></li>
                            <li><a href="/terms">Соглашения</a></li>
                            <li><a href="/discounts">Скидки</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Мы в Соц. Сетях</h3>
                        <div className="social-links">
                            <a href="https://instagram.com" className="social-link">📷</a>
                            <a href="https://vk.com" className="social-link">🔵</a>
                            <a href="https://youtube.com" className="social-link">▶️</a>
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
