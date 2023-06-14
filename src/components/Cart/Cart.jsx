import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0){
        return(
            <>
                <h2>Carrito vacio</h2>
                <Link to='/'> Seguir comprando </Link>
            </>
        )
    }
  return (
    <div>
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <h3>Total: $ {total}</h3>
      <button onClick={()=> vaciarCarrito()}>Vaciar carrito</button>
      <Link to="/checkout">Finaliza la compra</Link>
    </div>
  )
}

export default Cart
