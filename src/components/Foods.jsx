//import React, { useEffect,useState,response } from 'react'
import '../assets/DataMakanan'
import { DataMakanan } from '../assets/DataMakanan'
import './foods.css'


export function Foods() {
    

    return(
        <div>
            <h1>Foods</h1>
        <ul>
            {DataMakanan.map(item =>(
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
