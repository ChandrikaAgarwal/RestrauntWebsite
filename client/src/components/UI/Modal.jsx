import { Fragment } from "react"
import ReactDom from 'react-dom'


const BackDrop = props => {
    return <div className="fixed inset-0 bg-gray-500 opacity-75 h-[100vh] z-20">

    </div>
}

const ModalOverlay = props => {
    return <div className="fixed mt-[40vh] ml-[23rem] w-1/2 bg-white p-[2rem] rounded-lg z-30 shadow-lg ">
        <div>{props.children }</div>
    </div>
}

const overlayElement=document.getElementById("overlays")
const Modal = (props) => {
    return <Fragment>
     {ReactDom.createPortal(<BackDrop/>,overlayElement)}
        {ReactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,overlayElement)}
    </Fragment>
}

export default Modal;