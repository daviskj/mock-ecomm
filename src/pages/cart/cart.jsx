import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import './cart.css'
import {Link} from 'react-router-dom'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart'>
      <div >
        <h1>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0){
              return <CartItem data={product} />
            }
        })}
      </div>
        <div className='checkout'>
          <p> Subtotal: ${totalAmount} </p>
          <Link to='/'>
          <button> Continue Shopping</button>
          </Link>
          <button> Checkout </button>
        </div>

    </div>
  )
}

export default Cart