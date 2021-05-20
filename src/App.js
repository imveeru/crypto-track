import axios from 'axios';
import React, { useEffect,useState } from 'react';
import './App.css';

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
      console.log(err)
    })

  },[])

  return (
    <div className="App">
      <h1>API</h1>
    </div>
  );
}

export default App;
