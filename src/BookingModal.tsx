import React, { useState } from 'react'
import { BookingFormData } from './types/Product'
import './BookingModal.css'

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
    productName: string
}

export default function BookingModal({ isOpen, onClose, productName }: BookingModalProps) {
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        phone: '',
        email: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Booking form submitted:', { ...formData, productName })
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
        setFormData({ name: '', phone: '', email: '' })
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-header">
                    <h2>Забронировать примерку</h2>
                    <p>Товар: {productName}</p>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя и Фамилия"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Номер телефона"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Оставить заявку
                    </button>
                </form>
            </div>
        </div>
    )
}
