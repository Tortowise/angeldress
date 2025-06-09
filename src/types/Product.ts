export interface Product {
    id: number
    name: string
    price: string
    images: string[]
    category: string
    description: string
    details: {
        color: string
        type: string
        style: string
        occasion: string
        fabric: string
        care: string
    }
    sizes: string[]
    isWishlisted?: boolean
}

export interface BookingFormData {
    name: string
    phone: string
    email: string
}

export type ProductCategory =
    | 'all'
    | 'evening'
    | 'cocktail'
    | 'long'
    | 'short'
    | 'graduation'
