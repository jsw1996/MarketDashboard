
// let api = "https://sandbox.iexapis.com/stable/stable/stock/twtr/chart/1y?token=Tsk_5169a1c241ae4c1bb0f95a3d0708af28&period=annual"

// fetch(api).then(value => value.json()).then(value => console.log("value")).catch((err => console.log(err)));




//console.log(closeList);
//console.log(dateList);
// console.log(historyPrice);




import React, { useEffect, useState } from 'react';
import { Line } from '@reactchartjs/react-chart.js'
import '../../index.css'
import DateSelector from "./DateSelector"
import { loadDay, loadHistorical, loadQuote } from "../../api"




const smooth = require('array-smooth')




function LineChart({ symbol }) {




    const [chartData, setchartData] = useState({
        priceList: [],
        dateList: []
    })
    const [period, setPeriod] = useState('1d')
    const [curPrice, setCurPrice] = useState()


    const data = {
        labels: chartData.dateList,
        datasets: [
            {
                lineTension: 0.1,
                // fill: 'origin',
                label: 'price',
                data: chartData.priceList,
                fill: false,
                pointRadius: 1,
                backgroundColor: 'rgba(255, 99, 132,0.5)',
                // backgroundColor: 'red',
                borderColor: 'rgba(255, 99, 132, 0.9)',
                borderWidth: 2,
                pointHoverRadius: 8
            },
        ],
    }

    const options = {

        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },

        scales: {
            yAxes: [
                {
                    // type: 'logarithmic',

                    ticks: {
                        beginAtZero: false,
                    },
                    gridLines: {
                        display: true,
                        color: 'rgba(0,0,0,0.1)',
                        lineWidth: 1
                    }
                },
            ],
            xAxes: [{
                ticks: {

                },
                gridLines: {
                    display: false,
                    color: 'rgba(0,0,0,0.2)',
                    lineWidth: 1
                },
                display: false,
            }

            ]
        },
    }




    const updatePeriod = (interval) => {
        setPeriod(interval)
    }

    function doSearch(symbol, period) {
        if (period == "1d") {
            loadDay(symbol).then(data => {
                var subData = data.filter(function (value, index, ar) {
                    return (index % 4 === 0);
                });
                console.log(subData)
                // setPrice(subData.map(item => item["average"]));
                setchartData({
                    priceList: smooth(subData.map(item => item["average"]), 3),
                    dateList: subData.map((item, indx) => (item["minute"]))
                })
            });

        } else {
            loadHistorical(symbol, period).then(data => {
                setchartData({
                    priceList: data.map(item => item["close"]),
                    dateList: data.map(item => item["date"])
                })
            });
        }
    }


    function getQuote(symbol) {
        loadQuote(symbol).then(data => { setCurPrice(data) });
    }

    useEffect(() => {
        doSearch(symbol, period);
    }, [symbol, period]);

    useEffect(() => { getQuote(symbol) }, [symbol])


    return (
        <div id="lineChart">
            <div className='header'>
                <h1 className='title'>{`${symbol}`}</h1>
                <h2>{`\$${curPrice}`}</h2>

            </div>
            <Line id="line"
                height={370} data={data} options={options} />
            <DateSelector handleSelect={updatePeriod.bind(this)}></DateSelector>
        </div>)
}

export default LineChart