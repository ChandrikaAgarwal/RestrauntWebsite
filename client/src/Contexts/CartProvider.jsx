import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=props=>{
    const [items,setItems]=useState([])
    const addItemToCartHandler=item=>{
        setItems((prevItems)=>{                     
            const existingItemIndex=prevItems.findIndex((i)=>i.meal.id===item.meal.id);  
            let updatedItems;
            if(existingItemIndex!==-1){
                updatedItems=prevItems.map((i,index)=>index===existingItemIndex?{...i,quantity:i.quantity+item.quantity}:i);
            }else{
                updatedItems=[...prevItems,item]
            }
            return updatedItems;
            
        })
        
    } 
    const removeItemFromCartHandler = id => {
        setItems((prevItems)=>{
            const existingItemIndex = prevItems.findIndex((i) => i.meal.id === id)           
            let itemsAfterRemoval;
            if (existingItemIndex !== -1) {               
                if (prevItems[existingItemIndex].quantity === 1) {
                    itemsAfterRemoval = prevItems.filter((i) => i.meal.id !== id)
                } else {
                    prevItems[existingItemIndex].quantity-=1;
                    itemsAfterRemoval = [...prevItems];
                }
            }
            return itemsAfterRemoval;
        })
    }
    const cartContextObj={
     items:items,
     totalAmount:0,
     addItem:addItemToCartHandler,
     removeItem:removeItemFromCartHandler
    }

return <CartContext.Provider value={cartContextObj}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;