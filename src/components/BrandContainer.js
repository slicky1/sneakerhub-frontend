import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../source/index.js'
import Brand from './Brand.js'
import BrandForm from './BrandForm.js'
import '../styles/BrandContainer.css'


export default function BrandContainer() {

    const [brand, setBrand] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'brand')
        .then(res => res.json())
        .then(json => setBrand (json))

    }, [])


    function showBrands(){
        return brand.map(brand => < Brand brand = {brand} deleteBrand={deleteBrand} updateBrand={updateBrand} key={brand.id}/> )
    }


   // CREATE

   function createBrand(brd) {
    fetch(BASE_URL + "brand", {
      method: "POST",
      body: JSON.stringify(brd),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setBrand([...brand, json]));

    
  }
//Delete Brand
    function deleteBrand(brands){
        fetch(BASE_URL + 'brand/' + brands.id, {
            method: "DELETE"
        })
        const newBrands = brand.filter(brd => brd.id !== brands.id )
        setBrand(newBrands)
    }
        // Update Brand
        function updateBrand(brands) {
            fetch(BASE_URL + "brand/" + brands.id, {
              method: "PATCH",
              body: JSON.stringify(brands),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
        
        
            const newBrands = brand.map((brd) => {
              if (brd.id === brands.id) {
                brd = brands;
              }
              return brd;
            });
            setBrand(newBrands);
          }
        
    return (
        <div>
            <h2 className="brand-header">All Brands </h2>
             <div className = "brand-container" >{brand && showBrands ()} </div>
            <div className = "form-style"> <BrandForm createBrand={createBrand} /> </div>
        </div>
    )
}

