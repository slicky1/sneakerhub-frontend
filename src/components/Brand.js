import React from 'react'

export default function Brand({brand, deleteBrand}) {
    return (
        <div>
            <br />
            <p>
            {brand.name}
            </p>

                <button onClick = {() => deleteBrand(brand)}>Delete Brand </button>
            <br />
        </div>
    )
}
