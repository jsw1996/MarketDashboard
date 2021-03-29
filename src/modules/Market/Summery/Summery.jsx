import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { loadSummery } from '../../../api'
// const { Statistic, Card, Row, Col } = antd;
// const { ArrowUpOutlined, ArrowDownOutlined } = icons;






const Summery = () => {
    const a = 0;
    const resp = {
        marketSummaryResponse: {
            error: null,
            result: [{
                contractSymbol: false,
                exchange: "CME",
                exchangeDataDelayedBy: 10,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 969249600000,
                fullExchangeName: "CME",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "ES=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "6.50",
                    raw: 6.5
                },
                regularMarketChangePercent: {
                    fmt: "0.17%",
                    raw: 0.16749339
                },
                regularMarketPreviousClose: {
                    fmt: "3,880.75",
                    raw: 3880.75
                },
                regularMarketPrice: {
                    fmt: "3,887.25",
                    raw: 3887.25
                },
                regularMarketTime: {
                    fmt: "2:12AM EDT",
                    raw: 1616652776
                },
                shortName: "S&amp;P Futures",
                sourceInterval: 10,
                symbol: "ES=F",
                tradeable: false,
                triggerable: false
            }, {
                contractSymbol: false,
                exchange: "CBT",
                exchangeDataDelayedBy: 10,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 1017982800000,
                fullExchangeName: "CBOT",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "YM=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "73.00",
                    raw: 73
                },
                regularMarketChangePercent: {
                    fmt: "0.23%",
                    raw: 0.22587332
                },
                regularMarketPreviousClose: {
                    fmt: "32,319.00",
                    raw: 32319
                },
                regularMarketPrice: {
                    fmt: "32,392.00",
                    raw: 32392
                },
                regularMarketTime: {
                    fmt: "2:12AM EDT",
                    raw: 1616652774
                },
                shortName: "Dow Futures",
                sourceInterval: 10,
                symbol: "YM=F",
                tradeable: false,
                triggerable: false
            }, {
                contractSymbol: false,
                exchange: "CME",
                exchangeDataDelayedBy: 10,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 969249600000,
                fullExchangeName: "CME",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "NQ=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "17.75",
                    raw: 17.75
                },
                regularMarketChangePercent: {
                    fmt: "0.14%",
                    raw: 0.13873692
                },
                regularMarketPreviousClose: {
                    fmt: "12,794.00",
                    raw: 12794
                },
                regularMarketPrice: {
                    fmt: "12,811.75",
                    raw: 12811.75
                },
                regularMarketTime: {
                    fmt: "2:12AM EDT",
                    raw: 1616652771
                },
                shortName: "Nasdaq Futures",
                sourceInterval: 10,
                symbol: "NQ=F",
                tradeable: false,
                triggerable: false
            }, {
                contractSymbol: false,
                exchange: "CME",
                exchangeDataDelayedBy: 10,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 1499659200000,
                fullExchangeName: "CME",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "RTY=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "13.70",
                    raw: 13.699951
                },
                regularMarketChangePercent: {
                    fmt: "0.64%",
                    raw: 0.6431298
                },
                regularMarketPreviousClose: {
                    fmt: "2,130.20",
                    raw: 2130.2
                },
                regularMarketPrice: {
                    fmt: "2,143.90",
                    raw: 2143.9
                },
                regularMarketTime: {
                    fmt: "2:11AM EDT",
                    raw: 1616652716
                },
                shortName: "Russell 2000 Futures",
                sourceInterval: 10,
                symbol: "RTY=F",
                tradeable: false,
                triggerable: false
            }, {
                contractSymbol: false,
                exchange: "NYM",
                exchangeDataDelayedBy: 30,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 967003200000,
                fullExchangeName: "NY Mercantile",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "CL=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "-1.46",
                    raw: -1.4599991
                },
                regularMarketChangePercent: {
                    fmt: "-2.39%",
                    raw: -2.3863993
                },
                regularMarketPreviousClose: {
                    fmt: "61.18",
                    raw: 61.18
                },
                regularMarketPrice: {
                    fmt: "59.72",
                    raw: 59.72
                },
                regularMarketTime: {
                    fmt: "2:12AM EDT",
                    raw: 1616652775
                },
                shortName: "Crude Oil",
                sourceInterval: 30,
                symbol: "CL=F",
                tradeable: false,
                triggerable: false
            }, {
                contractSymbol: false,
                exchange: "CMX",
                exchangeDataDelayedBy: 30,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 967608000000,
                fullExchangeName: "COMEX",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "GC=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "0.50",
                    raw: 0.5
                },
                regularMarketChangePercent: {
                    fmt: "0.03%",
                    raw: 0.028848374
                },
                regularMarketPreviousClose: {
                    fmt: "1,733.20",
                    raw: 1733.2
                },
                regularMarketPrice: {
                    fmt: "1,733.70",
                    raw: 1733.7
                },
                regularMarketTime: {
                    fmt: "2:12AM EDT",
                    raw: 1616652760
                },
                shortName: "Gold",
                sourceInterval: 15,
                symbol: "GC=F",
                tradeable: false,
                triggerable: false
            }, {
                contractSymbol: false,
                exchange: "CMX",
                exchangeDataDelayedBy: 30,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 967608000000,
                fullExchangeName: "COMEX",
                gmtOffSetMilliseconds: -14400000,
                headSymbol: true,
                headSymbolAsString: "SI=F",
                language: "en-US",
                market: "us24_market",
                marketState: "REGULAR",
                quoteType: "FUTURE",
                region: "US",
                regularMarketChange: {
                    fmt: "-0.09",
                    raw: -0.08600044
                },
                regularMarketChangePercent: {
                    fmt: "-0.34%",
                    raw: -0.3408523
                },
                regularMarketPreviousClose: {
                    fmt: "25.23",
                    raw: 25.231
                },
                regularMarketPrice: {
                    fmt: "25.15",
                    raw: 25.145
                },
                regularMarketTime: {
                    fmt: "2:12AM EDT",
                    raw: 1616652760
                },
                shortName: "Silver",
                sourceInterval: 15,
                symbol: "SI=F",
                tradeable: false,
                triggerable: false
            }, {
                currency: "USD",
                exchange: "CCY",
                exchangeDataDelayedBy: 0,
                exchangeTimezoneName: "Europe/London",
                exchangeTimezoneShortName: "GMT",
                firstTradeDateMilliseconds: 1070236800000,
                fullExchangeName: "CCY",
                gmtOffSetMilliseconds: 0,
                language: "en-US",
                market: "ccy_market",
                marketState: "REGULAR",
                priceHint: 4,
                quoteSourceName: "Delayed Quote",
                quoteType: "CURRENCY",
                region: "US",
                regularMarketChange: {
                    fmt: "0.0001",
                    raw: 0.00013959408
                },
                regularMarketChangePercent: {
                    fmt: "0.01%",
                    raw: 0.011815246
                },
                regularMarketPreviousClose: {
                    fmt: "1.1819",
                    raw: 1.1818935
                },
                regularMarketPrice: {
                    fmt: "1.1820",
                    raw: 1.1820331
                },
                regularMarketTime: {
                    fmt: "6:21AM GMT",
                    raw: 1616653319
                },
                shortName: "EUR/USD",
                sourceInterval: 15,
                symbol: "EURUSD=X",
                tradeable: false,
                triggerable: false
            }, {
                exchange: "NYB",
                exchangeDataDelayedBy: 30,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: -252356400000,
                fullExchangeName: "NYBOT",
                gmtOffSetMilliseconds: -14400000,
                language: "en-US",
                longName: "Treasury Yield 10 Years",
                market: "us24_market",
                marketState: "REGULAR",
                priceHint: 4,
                quoteType: "INDEX",
                region: "US",
                regularMarketChange: {
                    fmt: "0.0000",
                    raw: 0
                },
                regularMarketChangePercent: {
                    fmt: "0.00%",
                    raw: 0
                },
                regularMarketPreviousClose: {
                    fmt: "1.6140",
                    raw: 1.614
                },
                regularMarketPrice: {
                    fmt: "1.6140",
                    raw: 1.614
                },
                regularMarketTime: {
                    fmt: "2:59PM EDT",
                    raw: 1616612399
                },
                shortName: "10-Yr Bond",
                sourceInterval: 30,
                symbol: "^TNX",
                tradeable: false,
                triggerable: false
            }, {
                exchange: "WCB",
                exchangeDataDelayedBy: 20,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 631290600000,
                fullExchangeName: "Chicago Options",
                gmtOffSetMilliseconds: -14400000,
                language: "en-US",
                market: "us_market",
                marketState: "PREPRE",
                priceHint: 2,
                quoteType: "INDEX",
                region: "US",
                regularMarketChange: {
                    fmt: "0.90",
                    raw: 0.9000015
                },
                regularMarketChangePercent: {
                    fmt: "4.43%",
                    raw: 4.433505
                },
                regularMarketPreviousClose: {
                    fmt: "20.30",
                    raw: 20.3
                },
                regularMarketPrice: {
                    fmt: "21.20",
                    raw: 21.2
                },
                regularMarketTime: {
                    fmt: "4:14PM EDT",
                    raw: 1616616890
                },
                shortName: "Vix",
                sourceInterval: 15,
                symbol: "^VIX",
                tradeable: false,
                triggerable: false
            }, {
                currency: "USD",
                exchange: "CCY",
                exchangeDataDelayedBy: 0,
                exchangeTimezoneName: "Europe/London",
                exchangeTimezoneShortName: "GMT",
                firstTradeDateMilliseconds: 1070236800000,
                fullExchangeName: "CCY",
                gmtOffSetMilliseconds: 0,
                language: "en-US",
                market: "ccy_market",
                marketState: "REGULAR",
                priceHint: 4,
                quoteSourceName: "Delayed Quote",
                quoteType: "CURRENCY",
                region: "US",
                regularMarketChange: {
                    fmt: "-0.0004",
                    raw: -0.00035607815
                },
                regularMarketChangePercent: {
                    fmt: "-0.03%",
                    raw: -0.026006924
                },
                regularMarketPreviousClose: {
                    fmt: "1.3690",
                    raw: 1.3690004
                },
                regularMarketPrice: {
                    fmt: "1.3686",
                    raw: 1.3686444
                },
                regularMarketTime: {
                    fmt: "6:21AM GMT",
                    raw: 1616653319
                },
                shortName: "GBP/USD",
                sourceInterval: 15,
                symbol: "GBPUSD=X",
                tradeable: false,
                triggerable: false
            }, {
                currency: "JPY",
                exchange: "CCY",
                exchangeDataDelayedBy: 0,
                exchangeTimezoneName: "Europe/London",
                exchangeTimezoneShortName: "GMT",
                firstTradeDateMilliseconds: 846633600000,
                fullExchangeName: "CCY",
                gmtOffSetMilliseconds: 0,
                language: "en-US",
                market: "ccy_market",
                marketState: "REGULAR",
                priceHint: 4,
                quoteSourceName: "Delayed Quote",
                quoteType: "CURRENCY",
                region: "US",
                regularMarketChange: {
                    fmt: "0.2380",
                    raw: 0.23799896
                },
                regularMarketChangePercent: {
                    fmt: "0.22%",
                    raw: 0.21888183
                },
                regularMarketPreviousClose: {
                    fmt: "108.7340",
                    raw: 108.734
                },
                regularMarketPrice: {
                    fmt: "108.9720",
                    raw: 108.972
                },
                regularMarketTime: {
                    fmt: "6:22AM GMT",
                    raw: 1616653374
                },
                shortName: "USD/JPY",
                sourceInterval: 15,
                symbol: "JPY=X",
                tradeable: false,
                triggerable: false
            }, {
                exchange: "CCC",
                exchangeDataDelayedBy: 0,
                exchangeTimezoneName: "Europe/London",
                exchangeTimezoneShortName: "GMT",
                firstTradeDateMilliseconds: 1410908400000,
                fullExchangeName: "CCC",
                gmtOffSetMilliseconds: 0,
                language: "en-US",
                market: "ccc_market",
                marketState: "REGULAR",
                quoteSourceName: "CoinMarketCap",
                quoteType: "CRYPTOCURRENCY",
                region: "US",
                regularMarketChange: {
                    fmt: "-718.73",
                    raw: -718.7344
                },
                regularMarketChangePercent: {
                    fmt: "-1.33%",
                    raw: -1.3282613
                },
                regularMarketPreviousClose: {
                    fmt: "53,043.06",
                    raw: 53043.06
                },
                regularMarketPrice: {
                    fmt: "53,392.39",
                    raw: 53392.387
                },
                regularMarketTime: {
                    fmt: "6:22AM GMT",
                    raw: 1616653322
                },
                sourceInterval: 15,
                symbol: "BTC-USD",
                tradeable: true,
                triggerable: false
            }, {
                exchange: "NIM",
                exchangeDataDelayedBy: 0,
                exchangeTimezoneName: "America/New_York",
                exchangeTimezoneShortName: "EDT",
                firstTradeDateMilliseconds: 1546266600000,
                fullExchangeName: "Nasdaq GIDS",
                gmtOffSetMilliseconds: -14400000,
                language: "en-US",
                market: "us_market",
                marketState: "PREPRE",
                priceHint: 2,
                quoteSourceName: "Delayed Quote",
                quoteType: "INDEX",
                region: "US",
                regularMarketChange: {
                    fmt: "-32.48",
                    raw: -32.47705
                },
                regularMarketChangePercent: {
                    fmt: "-2.96%",
                    raw: -2.9618623
                },
                regularMarketPreviousClose: {
                    fmt: "1,096.51",
                    raw: 1096.5078
                },
                regularMarketPrice: {
                    fmt: "1,064.03",
                    raw: 1064.0308
                },
                regularMarketTime: {
                    fmt: "2:21AM EDT",
                    raw: 1616653300
                },
                shortName: "CMC Crypto 200",
                sourceInterval: 15,
                symbol: "^CMC200",
                tradeable: false,
                triggerable: false
            }, {
                exchange: "FGI",
                exchangeDataDelayedBy: 15,
                exchangeTimezoneName: "Europe/London",
                exchangeTimezoneShortName: "GMT",
                firstTradeDateMilliseconds: 441964800000,
                fullExchangeName: "FTSE Index",
                gmtOffSetMilliseconds: 0,
                language: "en-US",
                market: "gb_market",
                marketState: "PREPRE",
                priceHint: 2,
                quoteType: "INDEX",
                region: "US",
                regularMarketChange: {
                    fmt: "13.70",
                    raw: 13.700195
                },
                regularMarketChangePercent: {
                    fmt: "0.20%",
                    raw: 0.20450525
                },
                regularMarketPreviousClose: {
                    fmt: "6,699.19",
                    raw: 6699.19
                },
                regularMarketPrice: {
                    fmt: "6,712.89",
                    raw: 6712.89
                },
                regularMarketTime: {
                    fmt: "4:35PM GMT",
                    raw: 1616603730
                },
                shortName: "FTSE 100",
                sourceInterval: 15,
                symbol: "^FTSE",
                tradeable: false,
                triggerable: false
            }, {
                exchange: "OSA",
                exchangeDataDelayedBy: 0,
                exchangeTimezoneName: "Asia/Tokyo",
                exchangeTimezoneShortName: "JST",
                firstTradeDateMilliseconds: -157420800000,
                fullExchangeName: "Osaka",
                gmtOffSetMilliseconds: 32400000,
                language: "en-US",
                market: "jp_market",
                marketState: "POSTPOST",
                priceHint: 2,
                quoteType: "INDEX",
                region: "US",
                regularMarketChange: {
                    fmt: "324.36",
                    raw: 324.36133
                },
                regularMarketChangePercent: {
                    fmt: "1.14%",
                    raw: 1.1418954
                },
                regularMarketPreviousClose: {
                    fmt: "28,405.52",
                    raw: 28405.52
                },
                regularMarketPrice: {
                    fmt: "28,729.88",
                    raw: 28729.88
                },
                regularMarketTime: {
                    fmt: "3:00PM JST",
                    raw: 1616652001
                },
                shortName: "Nikkei 225",
                sourceInterval: 20,
                symbol: "^N225",
                tradeable: false,
                triggerable: false
            }]
        }
    }

    let [data, setData] = useState(resp.marketSummaryResponse.result.slice(0, 3));


    // function getData() {
    //     return loadSummery().then((rawData) => { setData(rawData.marketSummaryResponse.result.slice(0, 3)) });
    // }

    function getPriceChange(item) {
        // return ((item.spark.close.slice(-1)[0] - item.regularMarketPreviousClose.raw)).toFixed(2)
    }

    function getPercentChange(item) {
        // return ((item.spark.close.slice(-1)[0] - item.regularMarketPreviousClose.raw) / item.regularMarketPreviousClose.raw * 100).toFixed(2) + '%'
        return item.regularMarketChangePercent.fmt
    }

    function getPrice(item) {
        //return (item.spark.close.slice(-1)[0]).toFixed(2);
        return item.regularMarketPrice.raw
    }

    function getColor(item) {
        if (getPriceChange(item) < 0) {
            return <ArrowDownOutlined id="arrow" style={{ display: "inlineBlock", fontSize: "20px", color: 'rgb(241,47,73)' }} />
        } else {
            return <ArrowUpOutlined id="arrow" style={{ display: "inlineBlock", fontSize: "20px", color: 'rgb(15,166,119)' }} />
        }
    }

    // useEffect(getData, [a])

    return (<div id="indexRow">
        <Row gutter={16}>
            {/* <Col span={12}>
                <Card>
                    <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <h4>S&P 500</h4>
                    <ArrowDownOutlined id="arrow" style={{ display: "inlineBlock", fontSize: "30px", color: 'red ' }} />
                    13%
                </Card>
            </Col> */}
            {data.map((item, index) => {
                return (<Col span={8}>
                    <div className="indexCard">
                        <div>
                            <span class="indexName">{item.shortName + " "}</span>
                            <span className="right" >{getPrice(item)}</span></div>
                        <div>
                            {/* <ArrowDownOutlined id="arrow" style={{ display: "inlineBlock", fontSize: "20px", color: 'rgb(241,47,73) ' }} /> */}
                            {getColor(item)}
                            <span className="right" >{getPercentChange(item)}
                            </span>
                        </div>
                    </div>
                </Col>)
            })}
        </Row>
    </div>)
}

export default Summery;


