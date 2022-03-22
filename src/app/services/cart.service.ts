import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class CartService {
  cart: CartItem[] = []
  order: Order = {
    cart: [],
    user: {
      fullName: "",
      address: "",
      creditCard: ""
    },
    totalPrice: 0
  }
  constructor() {}

  addToCart(cartItem: CartItem): CartItem[] {
    if (this.cart.find((item) => item.product.id === cartItem.product.id)) {
      throw new Error("Product already in card")
    } else {
      this.cart.push(cartItem)
      return this.cart
    }
  }
  clearCart(): void {
    this.cart = []
  }
  getCart(): CartItem[] {
    return this.cart
  }
  calculateTotalPrice(): number {
    let sum = this.cart.reduce(function (accumulator, curValue) {
      return accumulator + curValue.qty * curValue.product.price
    }, 0)
    return Math.round(sum * 100) / 100
  }
  removeItem(id:number): void {
    this.cart=this.cart.filter(item => !(item.product.id === id))
  }

  createOrder(cart: CartItem[], user: User, totalPrice: number) {
    this.order = { cart: cart, user: user, totalPrice: totalPrice }
  }

  getOrder(): Order {
    return this.order
  }
}
