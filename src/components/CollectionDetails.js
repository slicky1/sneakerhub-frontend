import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../source';
import Sneaker from './Sneaker';

export default function CollectionDetails() {
    const [collection, setCollection] = useState(null);
   
    
    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'collection/' + id)
        .then(res => res.json())
        .then(json => setCollection(json))

    }, [id]);

    useEffect(() =>{
        console.log(collection)
    },[collection]);

    return (
        <div>
            {collection && (
                    <>
                        <p>{collection.name}</p>
                        <h3>Sneakers</h3>
                        {collection.sneakers.map(sneaker => <Sneaker sneaker ={sneaker} />)}
                    </>
                )}
           
        </div>
    );
}
