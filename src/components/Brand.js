import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Brand.css'

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
        setEditMode(false)
    }
    return (
        
        <div className ="card">
            <br />
             <Link to = {`/brand/${brand.id}`}> <p>{brand.name}</p></Link>

            {editMode && (

                <>
                  <button onClick = {() => deleteBrand(brand)}>Delete Brand </button>

                  <form onSubmit ={handleUpdate}>
                  <input name ="name" value={newBrands.name} onChange={handleChange} />
                  <button type="submit">Update Brand</button>
                  </form>

                </>
            )}

            <button onClick = {toggleEdit}> Edit Brand</button>

            <br />
        </div>
    )
}
