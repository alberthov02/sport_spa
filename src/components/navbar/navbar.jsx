import React, {useState} from "react"
import {ReactComponent as Logo} from "../../images/logo.svg"
import {ReactComponent as Filter} from "../../images/filter-icon.svg"
import "../Navbar/Navbar.scss"
import {NavLink} from "react-router-dom"
function Navbar(props) {
    const [isAuth, setIsAuth] = useState(false)
    const [isFilterShow, setIsFilterShow] = useState(false);

    const handleClick = () => {
        setIsFilterShow(!isFilterShow)
    }
    return (
        <div>
            <div className="nav">
                <div className="nav-logo-part">
                    <Logo/>
                    <div >
                        <ul className="nav-menu">
                            <li><NavLink exact to="/">Jogs</NavLink></li>
                            <li><NavLink to="/info">Info</NavLink></li>
                            <li><NavLink to="/contact">Contact US </NavLink></li>
                            <button onClick={handleClick}><Filter className={isFilterShow?"filter-btn":"def-filter"}/></button>
                        </ul>
                    </div>
                    
                </div>
            </div>
            {
                isFilterShow && <div className="date-part">
                    <label>Date from</label>
                    <input type="date" id="aa" />
                    <label>Date to</label>
                    <input/>
                 </div>
            }
            
        </div>
    )
}
export default Navbar