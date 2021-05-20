import React from 'react'

function Coins({img,name,symbol,price,volume,priceChange,marketCap}) {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={img} alt="crypto"></img>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>

                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange<0?(
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)
                        :(<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                    <p className='coin-marketcap'>Mkt Cap : ${marketCap.toLocaleString()}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Coins
