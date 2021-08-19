import React from 'react'
import { Link } from 'react-router-dom'

export default function Collection({ collection }) {
    return (
        <div>
            {/* <p> {collection.name}</p> */}
            <Link to = {`/collection/${collection.id}`}> <p>{collection.name}</p></Link>
            {/* <p>BrandID: {collection.brand_id}</p> */}
        </div>
    )
}

