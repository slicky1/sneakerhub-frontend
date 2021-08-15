import React, {useState} from 'react'

export default function Brand({brand, deleteBrand, updateBrand}) {
    const [newBrands, setNewBrand] = useState({...brand})

    function handleChange(e){
        const updateValue = {...newBrands}
        updateValue[e.target.name] = e.target.value
        setNewBrand({...updateValue})
    }

    function handleUpdate(e){
        e.preventDefault()
        updateBrand(newBrands)
    }
    return (
        <div>
            <br />
            <p>{brand.name}</p>

                <button onClick = {() => deleteBrand(brand)}>Delete Brand </button>

                <form onSubmit ={handleUpdate}>
                <input name ="name" value={newBrands.name} onChange={handleChange} />
                <button type="submit">Update Brand</button>
                </form>
            <br />
        </div>
    )
}
