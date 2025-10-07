import { Fragment,useState } from "react"
import Header from "./components/Layout/Header"
import AvailableMeals from "./components/Meals/AvailableMeals"
import Cart from "./components/Cart/Cart"
import showModalContext from "./Contexts/showCartContext"
import CartProvider from "./Contexts/CartProvider"

function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
    const showCartHandler=()=>{
      setCartIsShown(true)
    }

    const hideCartHandler=()=>{
    setCartIsShown(false)
    }
    return (
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <showModalContext.Provider value={{showCartHandler}}>
          <Header/>
        </showModalContext.Provider>  
        <main>
        <AvailableMeals />
        </main>

      </CartProvider>
  )
}

export default App
