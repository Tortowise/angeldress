import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
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
            <Header currentPage="catalog" />

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

            <Footer />
        </div>
    )
}
