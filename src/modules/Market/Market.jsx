import React, { useEffect, useRef, useState } from 'react';
import Summery from './Summery/Summery'
import Movers from './Summery/Movers'
import TopLists from './Summery/TopLists'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { loadGainer } from '../../api';

const Market = () => {
    let [loading, setLoading] = useState(true);
    let [gainers, setGainers] = useState([]);
    let [lossers, setlossers] = useState();
    let loader = <LoadingOutlined style={{ fontSize: 50 }} spin />;

    console.log(loading)

    const loadGainners = () => {
        return loadGainer("gainers").then(data => { setGainers(data); console.log("setGainer"); });
    }

    const loadLossers = () => {
        return loadGainer("losers").then(data => { console.log(data); setlossers(data); });
    }

    useEffect(() => {
        loadGainners().then(() => { return loadLossers(); }).then(() => { setLoading(false) })
    }, [])


    return (
        loading ?
            <>
                <Spin id="spinner" indicator={loader} />
                <div className="center">Fetching Data</div>
            </>
            : (
                <div id="market">
                    <Summery></Summery>
                    <div id="moverRow">
                        <Movers className="moverCard" loseGain={"gainers"} data={gainers}></Movers>
                        <Movers className="moverCard" loseGain={"losers"} data={lossers}></Movers>
                    </div>
                    <TopLists />
                </div>)
    )
}

export default Market
