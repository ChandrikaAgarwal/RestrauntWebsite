import Modal from "../UI/Modal";
import CartContext from "../../Contexts/cart-Context";
import { useContext } from "react";
import MealItem from "../Meals/MealItem/MealItem";
const Cart = props => {
    const cartCntx=useContext(CartContext)
    console.log("context items:",cartCntx.items);
    
    const cartItems = <ul>{cartCntx.items.map((item,index) => <MealItem meal={item}></MealItem>)}</ul>
    console.log("cartItems: ",cartItems);
    
    return (
        <Modal onClose={props.onClose}>
            {cartItems} 
            <div className="flex items-end justify-between">
                <span className="font-bold text-xl">Total Amount</span>
                <span className="font-bold text-xl text-amber-900">35.62</span>
            </div>
            <div className="flex items-end justify-end">
                <button className="m-2 border rounded-full p-2 bg-amber-800 text-white w-1/8 font-semibold" onClick={props.onClose}>Close</button>
                <button className="m-2 border rounded-full p-2 bg-amber-800 text-white w-1/8 font-semibold">Order</button>
            </div>

        </Modal>
    )
}


export default Cart;