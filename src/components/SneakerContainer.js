import React, {useEffect} from 'react'
import {BASE_URL} from '../source/index.js'


export default function SneakerContainer() {

    const [brand, setBrand] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'brand')
        .then(res => res.json())
        .then(json => setBrand (json))

    }, [])

    useEffect(() => {
        console.log("Brand: ")
        console.log(brand)
    }, [brand])
    return (
        <div>
            
        </div>
    )
}

