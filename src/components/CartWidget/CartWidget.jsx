import cart from "./assets/carrito-de-compras.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContex"
import { Link } from "react-router-dom"

const CartWidget = () => {
   const { totalQuantity } = useContext(CartContext)
   
    return (
        <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none"}}>
              <img src={cart} alt="cart-widget"/>
              { totalQuantity }
        </Link>
    )
}


export default CartWidget