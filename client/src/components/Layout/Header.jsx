import { Fragment } from "react"
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderButtonComponent"
import Summary from "../UI/Summary"
const Header = (props) => {
    return (
        <Fragment>
            <header className="bg-amber-800 z-[10] h-[70px] fixed w-full flex items-center justify-between">
            <h1 className="mx-auto w-1/2 mt-1 text-2xl text-white font-bold">ReactMeals</h1>    
            <HeaderCartButton />
            </header>
            
            <div className="z-0 w-[100%] relative">
            <div className="overflow-hidden">
            <img src={mealsImage} alt="A table full of delicious food!" className=" w-[150vw] h-[25rem] rotate-[-5deg] -translate-y-16 -translate-x-1 object-cover z-0 rounded-xl"/>
            </div>
            <Summary />
            </div>
        </Fragment>
    )
}

export default Header