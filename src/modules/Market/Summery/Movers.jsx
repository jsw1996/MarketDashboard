import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { loadGainer } from '../../../api'


const Mover = ({ loseGain }) => {
    let [data, setData] = useState([])
    const color = loseGain == "gainers" ? "rgb(15,166,119)" : "rgb(241,47,73)";

    function updateData(loseGain) {
        loadGainer(loseGain).then(data => { setData(data) });
    }

    useEffect(() => { updateData(loseGain) }, [])

    return (
        <div className="moverCard">
            <h3>{"Top   " + loseGain}</h3>
            <table className="movers">
                <tbody >
                    <tr>
                        <th className="firstCol">Symbol</th>
                        <th>Last Price</th>
                        <th>Change</th>
                        <th>% Change</th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td className="firstCol" style={{ fontWeight: 600 }}>{item.symbol}</td>
                                <td style={{ color: color, fontWeight: 500 }}>{item.latestPrice}</td>
                                <td style={{ color: color, fontWeight: 500 }}>{item.change}</td>
                                <td style={{ color: color, fontWeight: 500 }}>{(item.changePercent * 100).toFixed(2) + "%"}</td>
                            </tr>
                        )

                    })}
                </tbody>

            </table></div>
    )
}

export default Mover