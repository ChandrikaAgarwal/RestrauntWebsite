import Modal from "../UI/Modal";
import CartContext from "../../Contexts/cart-Context";
import { useContext } from "react";
import MealItem from "../Meals/MealItem/MealItem";
const Cart = props => {
    const cartCntx=useContext(CartContext)

    function removeItemFromCart(e){
        e.preventDefault();
        const btnId=e.target.id
        const idToBeRemoved=btnId.split("-")[1]
        cartCntx.removeItem(idToBeRemoved)
    }

    console.log("context items:",cartCntx.items);
    const cartItems = <ul>{cartCntx.items.map((item,index) => (
        <li>
            <div className="">
            <h2 className="text-lg font-bold">{item.meal.name}</h2> 
            <div className="flex"><p className="font-bold text-amber-900 text-sm mr-5">${item.meal.price}</p> <div className="border px-0.5 rounded-md">x{item.quantity}</div> </div> 
            <button className="border rounded-md bg-gray-700 p-1 ml-5" id={`del-${item.meal.id}`} onClick={removeItemFromCart}>Delete</button>
            </div>
        </li>
    ))}
    </ul>
    const totalAmount=cartCntx.items.reduce((acc,item)=>{
        return acc+(item.meal.price*item.quantity)
    },0)
    console.log("cartItems: ",cartItems);
    
    return (
        <Modal onClose={props.onClose}>
            {cartItems} 
            <div className="flex items-end justify-between">
                <span className="font-bold text-xl">Total Amount</span>
                <span className="font-bold text-xl text-amber-900">{totalAmount}</span>
            </div>
            <div className="flex items-end justify-end">
                <button className="m-2 border rounded-full p-2 bg-amber-800 text-white w-1/8 font-semibold" onClick={props.onClose}>Close</button>
                <button className="m-2 border rounded-full p-2 bg-amber-800 text-white w-1/8 font-semibold">Order</button>
            </div>

        </Modal>
    )
}


export default Cart;