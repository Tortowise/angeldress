import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
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
            <Header currentPage="blog" />

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
            <Footer />
        </div>
    )
}

export default App
