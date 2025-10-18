import CartContext from "./Cart-Context";

const CartProvider=props=>{
    let items=[];
    const addItemToCartHandler=item=>{
       items.push(item)
        console.log("inside addItemToCartHandler ",cartContextObj);
        
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