import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product, type ProductCategory } from './types/Product'
import { products } from './data/products'
import './Catalog.css'

const categories = [
    { key: 'all' as ProductCategory, label: 'На любой повод' },
    { key: 'evening' as ProductCategory, label: 'Вечерние' },
    { key: 'cocktail' as ProductCategory, label: 'Коктейльные' },
    { key: 'long' as ProductCategory, label: 'Длинные' },
    { key: 'short' as ProductCategory, label: 'Короткие' },
    { key: 'graduation' as ProductCategory, label: 'Выпускные' }
]

const sortOptions = [
    { value: 'newest', label: 'ПОКАЗАТЬ СНАЧАЛА НОВЫЕ' },
    { value: 'price-low', label: 'ПО ВОЗРАСТАНИЮ ЦЕНЫ' },
    { value: 'price-high', label: 'ПО УБЫВАНИЮ ЦЕНЫ' },
    { value: 'popular', label: 'ПОПУЛЯРНЫЕ' }
]

export default function Catalog() {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all')
    const [sortBy, setSortBy] = useState('newest')
    const [currentPage, setCurrentPage] = useState(1)
    const [wishlist, setWishlist] = useState<Set<number>>(new Set())

    const filteredProducts = products.filter(product =>
        selectedCategory === 'all' || product.category === selectedCategory
    )

    const toggleWishlist = (productId: number) => {
        setWishlist(prev => {
            const newWishlist = new Set(prev)
            if (newWishlist.has(productId)) {
                newWishlist.delete(productId)
            } else {
                newWishlist.add(productId)
            }
            return newWishlist
        })
    }

    return (
        <div className="catalog-page">
            {/* Header */}
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="logo">
                        <span className="logo-text">𝒟𝒶𝓇𝒾𝒶</span>
                    </Link>
                    <nav className="navigation">
                        <Link to="/" className="nav-link">ГЛАВНАЯ</Link>
                        <Link to="/catalog" className="nav-link active">ПОДОБРАТЬ ПЛАТЬЕ</Link>
                        <Link to="/accessories" className="nav-link">АКСЕССУАРЫ</Link>
                        <Link to="/blog" className="nav-link">БЛОГ</Link>
                        <Link to="/about" className="nav-link">О НАС</Link>
                        <Link to="/contact" className="nav-link">КОНТАКТЫ</Link>
                        <Link to="/size" className="nav-link">УЗНАТЬ БОЛЬШЕ</Link>
                    </nav>
                    <div className="header-right">
                        <div className="heart-icon">♡</div>
                    </div>
                </div>
            </header>

            <main className="catalog-content">
                <div className="catalog-container">
                    {/* Sidebar */}
                    <aside className="catalog-sidebar">
                        <div className="category-filters">
                            {categories.map(category => (
                                <button
                                    key={category.key}
                                    className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category.key)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="catalog-main">
                        {/* Sort Options */}
                        <div className="catalog-header">
                            <div className="sort-dropdown">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="sort-select"
                                >
                                    {sortOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <Link to={`/catalog/${product.id}`}>
                                            <img src={product.images[0]} alt={product.name} />
                                        </Link>
                                        <button
                                            className={`wishlist-btn ${wishlist.has(product.id) ? 'active' : ''}`}
                                            onClick={() => toggleWishlist(product.id)}
                                        >
                                            {wishlist.has(product.id) ? '♥' : '♡'}
                                        </button>
                                    </div>
                                    <div className="product-info">
                                        <Link to={`/catalog/${product.id}`} className="product-name">
                                            {product.name}
                                        </Link>
                                        <div className="product-price">{product.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">→</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Платья в прокат</h3>
                        <ul>
                            <li><Link to="/catalog?category=evening">Вечерние</Link></li>
                            <li><Link to="/catalog?category=cocktail">Коктейль</Link></li>
                            <li><Link to="/catalog?category=long">Длинные</Link></li>
                            <li><Link to="/catalog?category=cocktail">Коктейльные</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Покупателям</h3>
                        <ul>
                            <li><Link to="/contact">Написать нам</Link></li>
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
