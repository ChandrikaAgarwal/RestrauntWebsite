import { Fragment,useState } from "react"
import Header from "./components/Layout/Header"
import AvailableMeals from "./components/Meals/AvailableMeals"
import Cart from "./components/Cart/Cart"
function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
    
    return (
      <Fragment>
        <Cart />
        <Header />
        <main>
        <AvailableMeals />
        </main>

      </Fragment>
  )
}

export default App
