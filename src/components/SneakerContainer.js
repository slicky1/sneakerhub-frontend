import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../source/index.js'
import Brand from './Brand.js'


export default function SneakerContainer() {

    const [brand, setBrand] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'brand')
        .then(res => res.json())
        .then(json => setBrand (json))

    }, [])


    function showBrands(){
        return brand.map(brand => < Brand brand = {brand} /> )
    }
    return (
        <div>
            {brand && showBrands () }
        </div>
    )
}

