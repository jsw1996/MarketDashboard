import React from 'react';
import Summery from './Summery/Summery'
import Movers from './Summery/Movers'
import TopLists from './Summery/TopLists'
import TopList from './Summery/TopLists';

const Market = () => {
    return (
        <div id="market">
            <Summery></Summery>
            <div id="moverRow">
                <Movers className="moverCard" loseGain={"gainers"}></Movers>
                <Movers className="moverCard" loseGain={"losers"}></Movers>
            </div>
            <TopLists />
        </div>

    )
}

export default Market
