import React from "react"
import BearImg from "../../images/bearImg.png"
import "./navbar.scss"
import {ReactComponent as BearFace} from "../../images/bear-face.svg"
function Navbar() {
    return (
        <div>
            <div className="nav">
                <img src={BearImg} />
                <BearFace/>
            </div>
        </div>
    )
}
export default Navbar