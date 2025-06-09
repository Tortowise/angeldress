import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from './data/products'
import BookingModal from './BookingModal'
import './ProductDetail.css'

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>()
    const product = products.find(p => p.id === Number(id))
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [selectedSize, setSelectedSize] = useState('')

    const relatedProducts = products.filter(p => p.id !== Number(id)).slice(0, 4)

    if (!product) {
        return (
            <div className="product-not-found">
                <h1>Товар не найден</h1>
                <Link to="/catalog">Вернуться к каталогу</Link>
            </div>
        )
    }

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index)
    }

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted)
    }

    const openBookingModal = () => {
        setIsBookingModalOpen(true)
    }

    return (
        <div className="product-detail-page">
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

            <main className="product-detail-content">
                <div className="product-detail-container">
                    {/* Product Images */}
                    <div className="product-images">
                        <div className="main-image">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                            />
                            <div className="image-magnifier">🔍</div>
                        </div>
                        <div className="thumbnail-images">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img src={image} alt={`${product.name} ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info">
                        <div className="product-price">{product.price}</div>

                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>

                        <div className="product-details">
                            <div className="detail-row">
                                <span className="detail-label">ЦВЕТ/ОТ РОЗОВЫЙ:</span>
                                <span className="detail-value">{product.details.color}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">ТИП ЗАСТЕЖКИ:</span>
                                <span className="detail-value">{product.details.type}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">ПОКРОЙ:</span>
                                <span className="detail-value">{product.details.style}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">ДЕТАЛИ:</span>
                                <span className="detail-value">{product.details.fabric}</span>
                            </div>
                        </div>

                        <div className="size-selection">
                            <h4>Размеры</h4>
                            <div className="size-buttons">
                                <button className="size-btn">ВЫБЕРИТЕ ОДИН ИЗ ВАРИАНТОВ</button>
                            </div>
                        </div>

                        <div className="product-actions">
                            <button
                                className="book-fitting-btn"
                                onClick={openBookingModal}
                            >
                                ЗАБРОНИРОВАТЬ ПРИМЕРКУ
                            </button>
                            <button
                                className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                                onClick={toggleWishlist}
                            >
                                {isWishlisted ? '♥ Убрать из избранного' : '♡ Добавить в избранное'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="additional-info">
                    <div className="info-section">
                        <h3>Фотосессии</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="info-section">
                        <h3>Мероприятия</h3>
                        <p>{product.description}</p>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h3>Похожие Модели</h3>
                    <div className="related-grid">
                        {relatedProducts.map(relatedProduct => (
                            <div key={relatedProduct.id} className="related-product">
                                <Link to={`/catalog/${relatedProduct.id}`} className="related-image">
                                    <img src={relatedProduct.images[0]} alt={relatedProduct.name} />
                                    <div className="related-overlay">
                                        <span className="related-name">{relatedProduct.name}</span>
                                    </div>
                                </Link>
                                <button className="related-wishlist">♡</button>
                            </div>
                        ))}
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
                            <li><Link to="/catalog?category=short">Короткие</Link></li>
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

            {/* Booking Modal */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                productName={product.name}
            />
        </div>
    )
}
