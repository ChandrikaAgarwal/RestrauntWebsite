import Modal from "../UI/Modal";
const Cart = props => {
    const cartItems = <ul>{[{ id: 'c1', name: "Sushi", amount: 2, price: 12.99 }]
        .map((item) => <li>{item.name}</li>)}</ul>
    return (
        <Modal>
            {cartItems} 
            <div className="flex items-end justify-between">
                <span className="font-bold text-xl">Total Amount</span>
                <span className="font-bold text-xl text-amber-900">35.62</span>
            </div>
            <div className="flex items-end justify-end">
                <button className="m-2 border rounded-full p-2 bg-amber-800 text-white w-1/8 font-semibold">Close</button>
                <button className="m-2 border rounded-full p-2 bg-amber-800 text-white w-1/8 font-semibold">Order</button>
            </div>

        </Modal>
    )
}


export default Cart;