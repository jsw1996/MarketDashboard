



const key = 'Tsk_5169a1c241ae4c1bb0f95a3d0708af28';
export const loadHistorical = (symbol, period) => {
    return fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${period}?token=${key}`).then(value => value.json());

};

export const loadDay = (symbol) => {
    console.log(`https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${key}`);
    return fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${key}`).then(value => value.json());
}

export const loadQuote = (symbol) => {
    return fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote/latestPrice?token=${key}`).then(value => value.json());
}

export const loadNews = (symbol) => {
    let url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${symbol}&region=US`;
    return fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7520fd3cc7mshcd7abeee19b05b4p1323f8jsn670c52fc2e6f",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    }).then(response => {
        console.log(response)
        return response.json();
    })
        .catch(err => {
            console.error(err);
        });
}


// export const loadSummery = () => {
//     return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?region=US", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "9b50f96cdemsh6b0c07e316f7646p15b0adjsn71f1295296cc",
//             "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
//         }
//     })
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }


export const loadSummery = () => {
    return fetch("https://yahoo-finance-low-latency.p.rapidapi.com/v6/finance/quote/marketSummary?lang=en&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7520fd3cc7mshcd7abeee19b05b4p1323f8jsn670c52fc2e6f",
            "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(err => {
            console.error(err);
        });
}

export const loadGainer = (loseGain) => {
    return fetch(`https://sandbox.iexapis.com/stable/stock/market/list/${loseGain}?token=Tsk_5169a1c241ae4c1bb0f95a3d0708af28`)
        .then(response => {
            return response.json();
        })
}




export const loadSector = () => {
    return fetch(`https://sandbox.iexapis.com/stable/stock/market/sector-performance?token=Tsk_5169a1c241ae4c1bb0f95a3d0708af28`)
        .then(response => {
            return response.json();
        })
}

export const loadList = () => {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9b50f96cdemsh6b0c07e316f7646p15b0adjsn71f1295296cc",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    }).then(response => {
        console.log(response);
        return response.json()
    })

}


//https://sandbox.iexapis.com/stable/stock/market/list/gainers?token=${Tsk_5169a1c241ae4c1bb0f95a3d0708af28}



// {
//     finance: {
//         error: null,
//             result: [{
//                 canonicalName: "DAY_GAINERS",
//                 count: 6,
//                 criteriaMeta: {
//                     criteria: [{
//                         field: "percentchange",
//                         labelsSelected: [],
//                         operators: ["GT"],
//                         values: [3]
//                     }, {
//                         field: "region",
//                         labelsSelected: [53],
//                         operators: ["EQ"],
//                         values: []
//                     }, {
//                         field: "intradaymarketcap",
//                         labelsSelected: [1, 2, 3],
//                         operators: ["EQ"],
//                         values: []
//                     }, {
//                         field: "dayvolume",
//                         labelsSelected: [],
//                         operators: ["GT"],
//                         values: [15000]
//                     }],
//                     offset: 0,
//                     quoteType: "EQUITY",
//                     size: 6,
//                     sortField: "percentchange",
//                     sortType: "DESC",
//                     topOperator: "AND"
//                 },
//                 description: "Stocks ordered in descending order by price percent change greater than 3% with respect to the previous close",
//                 id: "ec5bebb9-b7b2-4474-9e5c-3e258b61cbe6",
//                 predefinedScr: true,
//                 quotes: [{
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1257345000000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "DFIFF",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NMS",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1608129000000,
//                     fullExchangeName: "NasdaqGS",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "UPST",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NMS",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1613053800000,
//                     fullExchangeName: "NasdaqGS",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "DSP",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NMS",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1483626600000,
//                     fullExchangeName: "NasdaqGS",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "ORGO",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1041517800000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "VWAGY",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1558099800000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "LKNCY",
//                     tradeable: true,
//                     triggerable: false
//                 }],
//                 rawCriteria: "{\&quot;offset\&quot;:0,\&quot;size\&quot;:6,\&quot;sortField\&quot;:\&quot;percentchange\&quot;,\&quot;sortType\&quot;:\&quot;DESC\&quot;,\&quot;quoteType\&quot;:\&quot;EQUITY\&quot;,\&quot;query\&quot;:{\&quot;operator\&quot;:\&quot;AND\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;percentchange\&quot;,3.0]},{\&quot;operator\&quot;:\&quot;eq\&quot;,\&quot;operands\&quot;:[\&quot;region\&quot;,\&quot;us\&quot;]},{\&quot;operator\&quot;:\&quot;or\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,2000000000,10000000000]},{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,10000000000,100000000000]},{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,100000000000]}]},{\&quot;operator\&quot;:\&quot;gt\&quot;,\&quot;operands\&quot;:[\&quot;dayvolume\&quot;,15000]}]}}",
//                 start: 0,
//                 title: "Day Gainers - US",
//                 total: 166,
//                 versionId: 6
//             }, {
//                 canonicalName: "DAY_LOSERS",
//                 count: 6,
//                 criteriaMeta: {
//                     criteria: [{
//                         field: "percentchange",
//                         labelsSelected: [],
//                         operators: ["LT"],
//                         values: [-2.5]
//                     }, {
//                         field: "region",
//                         labelsSelected: [53],
//                         operators: ["EQ"],
//                         values: []
//                     }, {
//                         field: "intradaymarketcap",
//                         labelsSelected: [1, 2, 3],
//                         operators: ["EQ"],
//                         values: []
//                     }, {
//                         field: "dayvolume",
//                         labelsSelected: [],
//                         operators: ["GT"],
//                         values: [20000]
//                     }],
//                     offset: 0,
//                     quoteType: "EQUITY",
//                     size: 6,
//                     sortField: "percentchange",
//                     sortType: "ASC",
//                     topOperator: "AND"
//                 },
//                 description: "Stocks ordered in ascending order by price percent change with respect to the previous close",
//                 id: "8ecefa87-a8b0-434a-9b39-e061a0baef9b",
//                 predefinedScr: true,
//                 quotes: [{
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1373895000000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "TAWNF",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1407418200000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "NOKPF",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NYQ",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1611325800000,
//                     fullExchangeName: "NYSE",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "RLX",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1285162200000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "NWAU",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1212499800000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "TKGBY",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "PNK",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1149082200000,
//                     fullExchangeName: "Other OTC",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "AKBTY",
//                     tradeable: true,
//                     triggerable: false
//                 }],
//                 rawCriteria: "{\&quot;offset\&quot;:0,\&quot;size\&quot;:6,\&quot;sortField\&quot;:\&quot;percentchange\&quot;,\&quot;sortType\&quot;:\&quot;ASC\&quot;,\&quot;quoteType\&quot;:\&quot;EQUITY\&quot;,\&quot;query\&quot;:{\&quot;operator\&quot;:\&quot;AND\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;LT\&quot;,\&quot;operands\&quot;:[\&quot;percentchange\&quot;,-2.5]},{\&quot;operator\&quot;:\&quot;eq\&quot;,\&quot;operands\&quot;:[\&quot;region\&quot;,\&quot;us\&quot;]},{\&quot;operator\&quot;:\&quot;or\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,2000000000,10000000000]},{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,10000000000,100000000000]},{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,100000000000]}]},{\&quot;operator\&quot;:\&quot;gt\&quot;,\&quot;operands\&quot;:[\&quot;dayvolume\&quot;,20000]}]}}",
//                 start: 0,
//                 title: "Day Losers - US",
//                 total: 332,
//                 versionId: 4
//             }, {
//                 canonicalName: "MOST_ACTIVES",
//                 count: 6,
//                 criteriaMeta: {
//                     criteria: [{
//                         field: "region",
//                         labelsSelected: [53],
//                         operators: ["EQ"],
//                         values: []
//                     }, {
//                         field: "intradaymarketcap",
//                         labelsSelected: [1, 2, 3],
//                         operators: ["EQ"],
//                         values: []
//                     }, {
//                         field: "dayvolume",
//                         labelsSelected: [],
//                         operators: ["GT"],
//                         values: [5000000]
//                     }],
//                     offset: 0,
//                     quoteType: "EQUITY",
//                     size: 6,
//                     sortField: "dayvolume",
//                     sortType: "DESC",
//                     topOperator: "AND"
//                 },
//                 description: "Stocks ordered in descending order by intraday trade volume",
//                 id: "437465ef-980e-4d8c-a860-de7cbfbab373",
//                 predefinedScr: true,
//                 quotes: [{
//                     esgPopulated: false,
//                     exchange: "NMS",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 345479400000,
//                     fullExchangeName: "NasdaqGS",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "AAPL",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NYQ",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1611325800000,
//                     fullExchangeName: "NYSE",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "RLX",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NYQ",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1387377000000,
//                     fullExchangeName: "NYSE",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "AMC",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NYQ",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 1536759000000,
//                     fullExchangeName: "NYSE",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "NIO",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NYQ",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: 76253400000,
//                     fullExchangeName: "NYSE",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "F",
//                     tradeable: true,
//                     triggerable: false
//                 }, {
//                     esgPopulated: false,
//                     exchange: "NYQ",
//                     exchangeDataDelayedBy: 0,
//                     exchangeTimezoneName: "America/New_York",
//                     exchangeTimezoneShortName: "EDT",
//                     firstTradeDateMilliseconds: -252322200000,
//                     fullExchangeName: "NYSE",
//                     gmtOffSetMilliseconds: -14400000,
//                     language: "US",
//                     market: "us_market",
//                     marketState: "POSTPOST",
//                     priceHint: 2,
//                     quoteSourceName: "Delayed Quote",
//                     quoteType: "EQUITY",
//                     region: "EN-US",
//                     sourceInterval: 15,
//                     symbol: "GE",
//                     tradeable: true,
//                     triggerable: false
//                 }],
//                 rawCriteria: "{\&quot;offset\&quot;:0,\&quot;size\&quot;:6,\&quot;sortField\&quot;:\&quot;dayvolume\&quot;,\&quot;sortType\&quot;:\&quot;DESC\&quot;,\&quot;quoteType\&quot;:\&quot;EQUITY\&quot;,\&quot;query\&quot;:{\&quot;operator\&quot;:\&quot;AND\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;eq\&quot;,\&quot;operands\&quot;:[\&quot;region\&quot;,\&quot;us\&quot;]},{\&quot;operator\&quot;:\&quot;or\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,2000000000,10000000000]},{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,10000000000,100000000000]},{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,100000000000]}]},{\&quot;operator\&quot;:\&quot;gt\&quot;,\&quot;operands\&quot;:[\&quot;dayvolume\&quot;,5000000]}]}}",
//                 start: 0,
//                 title: "Most Actives - US",
//                 total: 229,
//                 versionId: 6
//             }]
//     }
// }


// {
//     finance: {
//       error: null,
//       result: [{
//     canonicalName: "DAY_GAINERS",
//     count: 6,
//     criteriaMeta: {
//       criteria: [{
//     field: "percentchange",
//     labelsSelected: [],
//     operators: ["GT"],
//     values: [3]
//   }, {
//     field: "region",
//     labelsSelected: [53],
//     operators: ["EQ"],
//     values: []
//   }, {
//     field: "intradaymarketcap",
//     labelsSelected: [1, 2, 3],
//     operators: ["EQ"],
//     values: []
//   }, {
//     field: "dayvolume",
//     labelsSelected: [],
//     operators: ["GT"],
//     values: [15000]
//   }],
//       offset: 0,
//       quoteType: "EQUITY",
//       size: 6,
//       sortField: "percentchange",
//       sortType: "DESC",
//       topOperator: "AND"
//     },
//     description: "Stocks ordered in descending order by price percent change greater than 3% with respect to the previous close",
//     id: "ec5bebb9-b7b2-4474-9e5c-3e258b61cbe6",
//     predefinedScr: true,
//     quotes: [{
//     esgPopulated: false,
//     exchange: "PNK",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1152711000000,
//     fullExchangeName: "Other OTC",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "ITRO",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "PNK",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1072189800000,
//     fullExchangeName: "Other OTC",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "TSNPD",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "PNK",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1287149400000,
//     fullExchangeName: "Other OTC",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "PHJMF",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1577975400000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "ADV",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "PNK",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1609857000000,
//     fullExchangeName: "Other OTC",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "AMSSY",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NYQ",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1611239400000,
//     fullExchangeName: "NYSE",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "MYTE",
//     tradeable: true,
//     triggerable: false
//   }],
//     rawCriteria: "{\&quot;offset\&quot;:0,\&quot;size\&quot;:6,\&quot;sortField\&quot;:\&quot;percentchange\&quot;,\&quot;sortType\&quot;:\&quot;DESC\&quot;,\&quot;quoteType\&quot;:\&quot;EQUITY\&quot;,\&quot;query\&quot;:{\&quot;operator\&quot;:\&quot;AND\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;percentchange\&quot;,3.0]},{\&quot;operator\&quot;:\&quot;eq\&quot;,\&quot;operands\&quot;:[\&quot;region\&quot;,\&quot;us\&quot;]},{\&quot;operator\&quot;:\&quot;or\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,2000000000,10000000000]},{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,10000000000,100000000000]},{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,100000000000]}]},{\&quot;operator\&quot;:\&quot;gt\&quot;,\&quot;operands\&quot;:[\&quot;dayvolume\&quot;,15000]}]}}",
//     start: 0,
//     title: "Day Gainers - US",
//     total: 25,
//     versionId: 6
//   }, {
//     canonicalName: "DAY_LOSERS",
//     count: 6,
//     criteriaMeta: {
//       criteria: [{
//     field: "percentchange",
//     labelsSelected: [],
//     operators: ["LT"],
//     values: [-2.5]
//   }, {
//     field: "region",
//     labelsSelected: [53],
//     operators: ["EQ"],
//     values: []
//   }, {
//     field: "intradaymarketcap",
//     labelsSelected: [1, 2, 3],
//     operators: ["EQ"],
//     values: []
//   }, {
//     field: "dayvolume",
//     labelsSelected: [],
//     operators: ["GT"],
//     values: [20000]
//   }],
//       offset: 0,
//       quoteType: "EQUITY",
//       size: 6,
//       sortField: "percentchange",
//       sortType: "ASC",
//       topOperator: "AND"
//     },
//     description: "Stocks ordered in ascending order by price percent change with respect to the previous close",
//     id: "8ecefa87-a8b0-434a-9b39-e061a0baef9b",
//     predefinedScr: true,
//     quotes: [{
//     esgPopulated: false,
//     exchange: "PNK",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1407418200000,
//     fullExchangeName: "Other OTC",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "NOKPF",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1608129000000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "UPST",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 674487000000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "IONS",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NYQ",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1592832600000,
//     fullExchangeName: "NYSE",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "MP",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1613053800000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "DSP",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1180099800000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "CLNE",
//     tradeable: true,
//     triggerable: false
//   }],
//     rawCriteria: "{\&quot;offset\&quot;:0,\&quot;size\&quot;:6,\&quot;sortField\&quot;:\&quot;percentchange\&quot;,\&quot;sortType\&quot;:\&quot;ASC\&quot;,\&quot;quoteType\&quot;:\&quot;EQUITY\&quot;,\&quot;query\&quot;:{\&quot;operator\&quot;:\&quot;AND\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;LT\&quot;,\&quot;operands\&quot;:[\&quot;percentchange\&quot;,-2.5]},{\&quot;operator\&quot;:\&quot;eq\&quot;,\&quot;operands\&quot;:[\&quot;region\&quot;,\&quot;us\&quot;]},{\&quot;operator\&quot;:\&quot;or\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,2000000000,10000000000]},{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,10000000000,100000000000]},{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,100000000000]}]},{\&quot;operator\&quot;:\&quot;gt\&quot;,\&quot;operands\&quot;:[\&quot;dayvolume\&quot;,20000]}]}}",
//     start: 0,
//     title: "Day Losers - US",
//     total: 1060,
//     versionId: 4
//   }, {
//     canonicalName: "MOST_ACTIVES",
//     count: 6,
//     criteriaMeta: {
//       criteria: [{
//     field: "region",
//     labelsSelected: [53],
//     operators: ["EQ"],
//     values: []
//   }, {
//     field: "intradaymarketcap",
//     labelsSelected: [1, 2, 3],
//     operators: ["EQ"],
//     values: []
//   }, {
//     field: "dayvolume",
//     labelsSelected: [],
//     operators: ["GT"],
//     values: [5000000]
//   }],
//       offset: 0,
//       quoteType: "EQUITY",
//       size: 6,
//       sortField: "dayvolume",
//       sortType: "DESC",
//       topOperator: "AND"
//     },
//     description: "Stocks ordered in descending order by intraday trade volume",
//     id: "437465ef-980e-4d8c-a860-de7cbfbab373",
//     predefinedScr: true,
//     quotes: [{
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 345479400000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "AAPL",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NYQ",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1387377000000,
//     fullExchangeName: "NYSE",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "AMC",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NYQ",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 76253400000,
//     fullExchangeName: "NYSE",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "F",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NYQ",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: -252322200000,
//     fullExchangeName: "NYSE",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "GE",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NYQ",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1536759000000,
//     fullExchangeName: "NYSE",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "NIO",
//     tradeable: true,
//     triggerable: false
//   }, {
//     esgPopulated: false,
//     exchange: "NMS",
//     exchangeDataDelayedBy: 0,
//     exchangeTimezoneName: "America/New_York",
//     exchangeTimezoneShortName: "EDT",
//     firstTradeDateMilliseconds: 1127827800000,
//     fullExchangeName: "NasdaqGS",
//     gmtOffSetMilliseconds: -14400000,
//     language: "US",
//     market: "us_market",
//     marketState: "POST",
//     priceHint: 2,
//     quoteSourceName: "Delayed Quote",
//     quoteType: "EQUITY",
//     region: "EN-US",
//     sourceInterval: 15,
//     symbol: "AAL",
//     tradeable: true,
//     triggerable: false
//   }],
//     rawCriteria: "{\&quot;offset\&quot;:0,\&quot;size\&quot;:6,\&quot;sortField\&quot;:\&quot;dayvolume\&quot;,\&quot;sortType\&quot;:\&quot;DESC\&quot;,\&quot;quoteType\&quot;:\&quot;EQUITY\&quot;,\&quot;query\&quot;:{\&quot;operator\&quot;:\&quot;AND\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;eq\&quot;,\&quot;operands\&quot;:[\&quot;region\&quot;,\&quot;us\&quot;]},{\&quot;operator\&quot;:\&quot;or\&quot;,\&quot;operands\&quot;:[{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,2000000000,10000000000]},{\&quot;operator\&quot;:\&quot;BTWN\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,10000000000,100000000000]},{\&quot;operator\&quot;:\&quot;GT\&quot;,\&quot;operands\&quot;:[\&quot;intradaymarketcap\&quot;,100000000000]}]},{\&quot;operator\&quot;:\&quot;gt\&quot;,\&quot;operands\&quot;:[\&quot;dayvolume\&quot;,5000000]}]}}",
//     start: 0,
//     title: "Most Actives - US",
//     total: 224,
//     versionId: 6
//   }]
//     }
//   }