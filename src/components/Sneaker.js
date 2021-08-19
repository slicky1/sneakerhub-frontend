import React from 'react'

export default function Sneaker({sneaker}) {
    return (
        <div>
            <p> Name: {sneaker.name}</p>
            <p> Size: {sneaker.size}</p>
            <p> Price: {sneaker.price}</p>
            <p> Color: {sneaker.color}</p>
        </div>
    )
}
