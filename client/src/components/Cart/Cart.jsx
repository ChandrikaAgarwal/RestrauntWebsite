import Modal from "../UI/Modal";
import CartContext from "../../Contexts/cart-context";
import { useContext } from "react";
import MealItem from "../Meals/MealItem/MealItem";
import Button from "../UI/Button";
const Cart = props => {
    const cartCntx=useContext(CartContext)

    function removeItemFromCart(e){
        e.preventDefault();
        const btnId = e.target.id
        const idToBeRemoved=btnId.split("-")[1]
        cartCntx.removeItem(idToBeRemoved)
    }
    const cartItems = <ul>{cartCntx.items.map((item,index) => (
        <li>
           
            <h2 className="text-lg font-bold mb-2">{item.meal.name}</h2> 
            <div className="flex gap-30 items-start justify-between"><p className="font-bold text-amber-900 text-md">${item.meal.price}</p> <div className="border px-2 rounded-sm">x{item.quantity}</div>  
                <Button minus="-" plus="+" id={`btn-${item.meal.id}`} onRemove={removeItemFromCart} onAdd={()=>cartCntx.addItem({...item,quantity:1})} />
            </div>
            <hr className="mt-2"/>
        </li>
    ))}
    </ul>
    const totalAmount=cartCntx.items.reduce((acc,item)=>{
        return acc+(item.meal.price*item.quantity)
    },0)
    
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