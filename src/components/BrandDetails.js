import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../source';
import Collection from './Collection';

export default function BrandDetails() {
    const [brand, setBrand] = useState(null);
   
    
    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'brand/' + id)
        .then(res => res.json())
        .then(json => setBrand(json))

    }, [id]);

    useEffect(() =>{
        console.log(brand)
    },[brand]);

    return (
        <div>
            {brand && (
                    <>
                        <p>Brand Name: {brand.name}</p>
                        <h3>Collection</h3>
                        {brand.collections.map(collection => <Collection collection ={collection} />)}
                    </>
                )}
           
        </div>
    );
}
