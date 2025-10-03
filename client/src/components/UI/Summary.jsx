import { Fragment } from "react"
const Summary = () => {
    return (
        <Fragment>
            <div className="bg-gray-700 z-50 w-1/2 mx-auto p-8 rounded-xl absolute top-1/2 left-1/4 shadow-lg shadow-gray-600 ">
                <h1 className="text-white text-2xl font-bold items-center justify-center mx-auto text-center mb-3 mt-0">Delicious Food, Delievered To You</h1>
                <span className="text-white text-md">Choose your favourite meal from our broad selection of available meals and </span><br />
                <span className="text-white mx-[7rem] text-md">enjoy a delicious lunch or dinner at home</span><br />
                <span className="text-white mx-[2px] text-md">All our meals are cooked with high-quality ingredients, just-in-time and of </span><br />
                <span className="text-white mx-[8rem] text-md">course by experienced chefs!</span>
            </div>
        </Fragment>
    )
}

export default Summary