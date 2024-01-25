import React from 'react'
import { DataMinuman } from '../assets/DataMakanan'

export default function Drinks() {
  return (
    <div>
        <h1>Drinks</h1>
        <ul>
            {DataMinuman.map(item =>(
                <li>
                    <p>{item.nama}</p>
                <img src={item.image} alt="" />
                    <p>{item.harga}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
