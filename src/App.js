import axios from 'axios';
import React, { useEffect,useState } from 'react';
import './App.css';
import Coins from './Coins';
import { Table, Thead,  Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


document.title="Crypto-Track"

//https: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {

  const [coins,setCoins]=useState([])
  const [search,setSearch]=useState('')

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

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const fileteredCoins= coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())  
  )

  return (
    <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search  a Currency</h1>
          <form>
            <input type="search" className="coin-input" onChange={handleChange} placeholder="Type some crypto currency..."></input>
          </form>
        </div>
        <div>
          <Table>
                <Thead>
                  <Tr>
                      <Th>Icon</Th>
                      <Th>Name</Th>
                      <Th>Symbol</Th>
                      <Th>Price</Th>
                      <Th>Volume</Th>
                      <Th>Change</Th>
                      <Th>Market Capital</Th> 
                  </Tr>
                </Thead>

                  {fileteredCoins.map(coin=>{
                      return(
                          <Coins
                              key={coin.id}
                              img={coin.image}
                              name={coin.name}
                              symbol={coin.symbol}
                              price={coin.current_price}
                              volume={coin.total_volume}
                              priceChange={coin.price_change_percentage_24h}
                              marketCap={coin.market_cap}
                          />
                      )
                  })}
              </Table>
            </div>
      </div>
  );
}

export default App;
