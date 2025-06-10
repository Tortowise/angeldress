import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { products } from './data/products'
import BookingModal from './BookingModal'
import './ProductDetail.css'

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>()
    const product = products.find(p => p.id === Number(id))
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedSize, setSelectedSize] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isWishlisted, setIsWishlisted] = useState(product?.isWishlisted || false)

    if (!product) {
        return (
            <div className="product-detail-page">
                <Header />
                <div className="product-not-found">
                    <h1>Товар не найден</h1>
                    <Link to="/catalog">Вернуться в каталог</Link>
                </div>
                <Footer />
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
        setIsModalOpen(true)
    }

    return (
        <div className="product-detail-page">
            <Header />

            {/* Main Content */}
            <main className="product-detail-content">
                <div className="breadcrumb">
                    <Link to="/">Главная</Link>
                    <span>/</span>
                    <Link to="/catalog">Каталог</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>

                <div className="product-detail-container">
                    <div className="product-images">
                        <div className="main-image">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                            />
                        </div>
                        <div className="thumbnail-images">
                            {product.images.map((image, index) => (
                                <button
                                    key={`${product.id}-image-${index}`}
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img src={image} alt={`${product.name} ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="product-info">
                        <h1 className="product-title">{product.name}</h1>

                        <div className="product-price">
                            <span className="current-price">{product.price} ₽</span>
                        </div>

                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>

                        <div className="product-sizes">
                            <h3>Размер:</h3>
                            <div className="size-options">
                                {product.sizes.map((size) => (
                                    <button
                                        key={`${product.id}-size-${size}`}
                                        className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="product-details">
                            <div className="detail-item">
                                <span className="detail-label">Цвет:</span>
                                <span className="detail-value">{product.details.color}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Тип:</span>
                                <span className="detail-value">{product.details.type}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Стиль:</span>
                                <span className="detail-value">{product.details.style}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Повод:</span>
                                <span className="detail-value">{product.details.occasion}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Ткань:</span>
                                <span className="detail-value">{product.details.fabric}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Категория:</span>
                                <span className="detail-value">{product.category}</span>
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

                        <div className="product-care">
                            <h3>Уход за изделием:</h3>
                            <p>{product.details.care}</p>
                        </div>
                    </div>
                </div>

                <div className="related-products">
                    <h3>Похожие товары</h3>
                    <div className="related-grid">
                        {products
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 4)
                            .map(relatedProduct => (
                                <div key={relatedProduct.id} className="related-product">
                                    <Link to={`/catalog/${relatedProduct.id}`}>
                                        <img src={relatedProduct.images[0]} alt={relatedProduct.name} />
                                        <h4>{relatedProduct.name}</h4>
                                        <p>{relatedProduct.price} ₽</p>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </main>

            <Footer />

            {/* Booking Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
            />
        </div>
    )
}
