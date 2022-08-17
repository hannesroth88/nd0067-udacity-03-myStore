import { Injectable } from "@angular/core"
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: "root"
})
export class CartService {
  cart: CartItem[] = []
  order: Order = {
    id:"",
    cart: [],
    user: {
      fullName: "",
      address: "",
      creditCard: ""
    },
    totalPrice: 0
  }
  constructor() {}

  /**
   * @description adds an item to the card
   * inputs:
   * @param {CartItem} cart - the cartItem to add to cart
   * output:
   * @param {CartItem[]} cartItem[] - current cartItems in cart
   **/
  addToCart(cartItem: CartItem): CartItem[] {
    if (this.cart.find((item) => item.product.id === cartItem.product.id)) {
      throw new Error("Product already in card")
    } else {
      this.cart.push(cartItem)
      return this.cart
    }
  }
  
  /**
   * @description get current cartItems of the cart
   * outputs:
   * @param {CartItem[]} cartItems - current cartItems in cart
   **/
  getCart(): CartItem[] {
    return this.cart
  }
  
  /**
   * @description calculates total price of current cart. qty*price
   * outputs:
   * @param {number} totalPrice - total price of current cart
   **/
  calculateTotalPrice(): number {
    let sum = this.cart.reduce(function (accumulator, curValue) {
      return accumulator + curValue.qty * curValue.product.price
    }, 0)
    return Math.round(sum * 100) / 100
  }
    
  /**
   * @description removes an item from cart by id
   * inputs:
   * @param {number} id - id of cartitem to be remove
   **/
  removeItem(id:number): void {
    this.cart=this.cart.filter(item => !(item.product.id === id))
  }

  /**
   * @description creates the order
   * inputs:
   * @param {CartItem[]} cart - cart with products and qty
   * @param {User} user - user of the order
   * @param {number} totalPrice - totalPrice of order
   **/
  createOrder(cart: CartItem[], user: User, totalPrice: number) {
    this.order = { id: uuidv4(),cart: cart, user: user, totalPrice: totalPrice }
  }

  /**
   * @description get the order
   * outputs:
   * @param {Order} order - returns the order
   **/
  getOrder(): Order {
    return this.order
  }
}
