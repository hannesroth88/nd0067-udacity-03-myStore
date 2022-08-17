interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

interface CartItem {
  product: Product
  qty: number
}

interface Order {
  id:string
  cart: CartItem[]
  user: User
  totalPrice: number
}

interface User {
  fullName: string
  address: string
  creditCard: string
}
