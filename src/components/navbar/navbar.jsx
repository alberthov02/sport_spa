import React, {useState, useEffect} from "react";
import {ReactComponent as Logo} from "../../images/logo.svg";
import {ReactComponent as Filter} from "../../images/filter-icon.svg";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar({isAuthorized, setFilteredJogs, jogs}) {
    const [isFilterShow, setIsFilterShow] = useState(false);
    const [filterFrom, setFilterFrom] = useState({
        dateFrom: '',
        dateTo: '',
    });
    useEffect(() => {
        if (!jogs) {
            return
        }
        setFilteredJogs(jogs)
    }, [jogs]);

    const getDateSeconds = (date) => {
        const currentSeconds = new Date().getTime();
        return parseInt(currentSeconds + date);
    }

    const filterData = ({data, dateFrom, dateTo}) => {
        const testData = data.filter((jog) => {
            const dateFromSeconds = new Date(dateFrom).getTime();
            const dateToSeconds = new Date(dateTo).getTime();
            console.log(getDateSeconds(jog.date), dateFromSeconds, dateToSeconds);
            console.log('getDateSeconds(jog.date), dateFromSeconds, dateToSeconds');

            if (!!(dateFrom && dateTo)) {
                return ((getDateSeconds(jog.date) > dateFromSeconds) && (getDateSeconds(jog.date) < dateToSeconds))
            } else if (dateFrom) {
                return (getDateSeconds(jog.date) > dateFromSeconds)
            } else if (dateTo) {
                return (getDateSeconds(jog.date) < dateToSeconds)
            } else return false;
        });
        console.log('filtred', testData);

        setFilteredJogs(testData);
    }

    const handleClick = () => {
        setIsFilterShow(!isFilterShow);
    }

    const handleDateChange = (event) => { // inputName, value
        const { value, id: inputName } = event.target;
        setFilterFrom({
            ...filterFrom,
            [inputName]: value,
        })
        
        filterData({ data: jogs, ...filterFrom, [inputName]: value});
    }
    
    return (
        <div>
            <div className="nav">
                <div className="nav-logo-part">
                    <Logo/>
                    { isAuthorized &&  
                        <div >
                            <ul className="nav-menu">
                                <li><NavLink exact to="/">Jogs</NavLink></li>
                                <li><NavLink to="/info">Info</NavLink></li>
                                <li><NavLink to="/contact">Contact US </NavLink></li>
                                <button onClick={handleClick}><Filter className={isFilterShow?"filter-btn":"def-filter"}/></button>
                            </ul>
                        </div>
                    }
                    
                </div>
            </div>
            {
                isFilterShow && <div className="date-part">
                    <label>Date from</label>
                    <input onChange={handleDateChange} value={filterFrom.dateFrom} type="date" id="dateFrom" />
                    <label>Date to</label>
                    <input onChange={handleDateChange} value={filterFrom.dateTo} type="date" id="dateTo"/>
                 </div>
            }
        </div>
    )
}
export default Navbar