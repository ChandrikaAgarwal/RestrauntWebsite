import CartContext from "./Cart-Context";

const CartProvider=props=>{
    const addItemToCartHandler=item=>{} 
    const removeItemFromCartHandler=id=>{}
    const cartContextObj={
     items:[],
     totalAmount:0,
     addItem:addItemToCartHandler,
     removeItem:removeItemFromCartHandler
    }

return <CartContext.Provider value={cartContextObj}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;