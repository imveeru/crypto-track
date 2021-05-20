import axios from 'axios';
import React, { useEffect,useState } from 'react';
import './App.css';

document.title="Cryto-Track"

//https: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {

  const [coin,setCoins]=useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(err=>{
      alert('Oops! Something went wrong.')
    })

  },[])

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search  a Currency</h1>
        <form>
          <input type="text" className="coin-input    " placeholder="Search"></input>
        </form>
      </div>

      
    </div>
  );
}

export default App;
