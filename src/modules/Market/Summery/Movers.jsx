import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



const Mover = ({ loseGain, data }) => {
    const color = loseGain == "gainers" ? "rgb(15,166,119)" : "rgb(241,47,73)";
    let mydata = !data ? [] : data;
    console.log(mydata);


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
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
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