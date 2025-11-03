import { useContext } from "react";
import CartIcon from "../Cart/CartIcon"
import showModalContext from "../../Contexts/showCartContext";
import CartContext from "../../Contexts/cart-Context";
const HeaderCartButton = () => {
    const cartCtx=useContext(CartContext)
    console.log("cartContext: ",cartCtx);
    
    let quantity=0;
    cartCtx.items.forEach(item=>{
        console.log("item.quantity: ",item.quantity);
        quantity+=Number(item.quantity)
    })
    
    const {showCartHandler}=useContext(showModalContext)
    return <button className="mx-auto text-xl text-white font-semibold
     bg-amber-950 px-12 py-2 w-[20rem] m-3 rounded-3xl flex" onClick={showCartHandler}>
        <span className="w-5 h-5 mr-2 mt-3 ml-5"><CartIcon/></span>
        <span className="mr-4 ml-2 mt-2">Your Cart</span>
        <span className="text-sm font-bold mt-1 bg-amber-800 px-3 py-2 rounded-xl">{quantity}</span>

    </button>
}

export default HeaderCartButton;