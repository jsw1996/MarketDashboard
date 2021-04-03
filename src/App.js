import './App.css';
import LineChart from './modules/Chart/LineChart';
import React, { useEffect } from 'react';
import SearchBar from './modules/SearchBar/SearchBar.jsx'
import News from './modules/News/News'
import 'bootstrap/dist/css/bootstrap.min.css';
import QueueAnim from 'rc-queue-anim';



const smooth = require('array-smooth')

function App() {

  let [symbol, setSymbol] = React.useState("baba");

  function doSearch(symbol) {
    setSymbol(symbol)
  }

  return (

    <QueueAnim delay={600} duration={1000} interval={500} className="queue-simple">
      <div key="a" id="graphCard">
        <SearchBar handleSelect={doSearch.bind(this)} />
        <LineChart symbol={symbol} />
      </div>
      <div key="b" id="newsCard">
        <h1>Recent News</h1>
        <News symbol={symbol.toLowerCase()}></News>
      </div>
    </QueueAnim>

  );
}

export default App;