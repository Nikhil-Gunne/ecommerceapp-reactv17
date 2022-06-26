import CartContext from '../../context/CartContext'
import './index.css'

// Write your code here
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let TotalPrice = 0
      cartList.forEach(eachCartItem => {
        TotalPrice += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="total-price-text">
            Order Total: <span className="span-text">Rs {TotalPrice}/-</span>
          </h1>
          <p className="items-in-cart-text">{cartList.length} items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary