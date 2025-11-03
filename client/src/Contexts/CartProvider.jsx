import { useState } from "react";
import CartContext from "./cart-Context";

const CartProvider=props=>{
    const [items,setItems]=useState([])
    const addItemToCartHandler=item=>{
        setItems((prevItems)=>{                     
            const existingItemIndex=prevItems.findIndex((i)=>i.meal.id===item.meal.id);  
            let updatedItems;
            if(existingItemIndex!==-1){
                updatedItems=[...prevItems];
                updatedItems[existingItemIndex].quantity=item.quantity
            }else{
                updatedItems=[...prevItems,item]
            }
            return updatedItems;
            
        })
        
    } 
    const removeItemFromCartHandler=id=>{}
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