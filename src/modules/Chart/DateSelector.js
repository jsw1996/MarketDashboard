import React from 'react';


const DateSelector = ({ handleSelect }) => {



    function buttonActivate(e, btn) {
        const periodBtns = document.getElementsByClassName("period-btn");
        for (let item of periodBtns) {
            item.style.backgroundColor = "transparent";
            item.style.color = "#ff4d4f"
        }
        e.target.style.backgroundColor = "#ff4d4f";
        e.target.style.color = "white";


        handleSelect(btn);
    }



    return (
        <div id="dateSelector">
            <button onClick={(e) => { buttonActivate(e, "1d") }} className="period-btn default-period">1D</button>
            <button onClick={(e) => { buttonActivate(e, "1m") }} className="period-btn">1M</button>
            <button onClick={(e) => { buttonActivate(e, "1y") }} className="period-btn">1Y</button>
        </div>
    )
}

export default DateSelector;