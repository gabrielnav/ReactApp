  import React from 'react'
import CartIcon from './cart_icon.png'


function CartWidget() {
    return (
        <div>
            <img src={CartIcon} alt="cart_icon" width='32' />    
        </div>
    )
}
export default CartWidget