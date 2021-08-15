import React, {useState} from 'react'

export default function BrandForm({createBrand}) {
    const [brand, setBrand] = useState({name: ""})

    function handleChange(e) {
        const updatedValue = {...brand}
        updatedValue[e.target.name] = e.target.value
        setBrand(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createBrand(brand)
    } 


    return (
        <div>
            <h2>Create New Brand</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={brand.name} onChange={handleChange} />
                <button type="submit">Create Brand</button>
            </form>
        </div>
    )
}