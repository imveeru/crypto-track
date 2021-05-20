import React from 'react'
import './Coins.css'

function Coins({img,name,symbol,price,volume,priceChange,marketCap}) {
    return (
                <tr>
                    <td><img src={img} alt="crypto"/></td>
                    <td><p className="coin-name">{name}</p></td>
                    <td>{symbol.toUpperCase()}</td>
                    <td>${price.toFixed(2)}</td>
                    <td>${volume.toLocaleString()}</td>
                    <td>
                        {priceChange<0?(
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)
                         :(<p className='coin-percent green'>+{priceChange.toFixed(2)}%</p>)}
                    </td>
                    <td>${marketCap.toLocaleString()}</td>
                </tr>
    )
}

export default Coins
