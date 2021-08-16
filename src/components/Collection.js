import React from 'react'

export default function Collection({ collection }) {
    return (
        <div>
            <p>Name: {collection.name}</p>
            <p>BrandID: {collection.brand_id}</p>
        </div>
    )
}
