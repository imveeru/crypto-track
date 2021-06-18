import React from 'react'
import './Coins.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function Coins({img,name,symbol,price,volume,priceChange,marketCap}) {
    return (
                <Tbody>
                    <Tr>
                        <Td><img src={img} alt="crypto"/></Td>
                        <Td><p className="coin-name">{name}</p></Td>
                        <Td>{symbol.toUpperCase()}</Td>
                        <Td>${price.toFixed(2)}</Td>
                        <Td>${volume.toLocaleString()}</Td>
                        <Td>
                            {priceChange<0?(
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)
                            :(<p className='coin-percent green'>+{priceChange.toFixed(2)}%</p>)}
                        </Td>
                        <Td>${marketCap.toLocaleString()}</Td>
                    </Tr>
                </Tbody>
    )
}

export default Coins
