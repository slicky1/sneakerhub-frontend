import React, {useState} from 'react'

export default function Brand({brand, deleteBrand, updateBrand}) {
    const [newBrands, setNewBrand] = useState({...brand})
    const [editMode, setEditMode] = useState(false)

    function handleChange(e){
        const updateValue = {...newBrands}
        updateValue[e.target.name] = e.target.value
        setNewBrand({...updateValue})
    }

    function toggleEdit(){
        setEditMode(!editMode)
    }

    function handleUpdate(e){
        e.preventDefault()
        updateBrand(newBrands)
    }
    return (
        <div>
            <br />
            <p>{brand.name}</p>

            {
                editMode &&

                <>
                  <button onClick = {() => deleteBrand(brand)}>Delete Brand </button>

                  <form onSubmit ={handleUpdate}>
                  <input name ="name" value={newBrands.name} onChange={handleChange} />
                  <button type="submit">Update Brand</button>
                  </form>

                </>
            }

            <button onClick = {toggleEdit}> Toggle Mode</button>

            <br />
        </div>
    )
}
