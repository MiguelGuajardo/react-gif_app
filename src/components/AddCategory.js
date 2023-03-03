import React, { useState } from 'react'
import PropTypes from "prop-types"

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")
    
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCategories(categories => [...categories, inputValue])
            setInputValue("")
        }
    }
    
return (
    <form onSubmit={handleSubmit}>
        <h2>Add Category</h2>
        <div className='line-input'>
            <input type="text" placeholder='Ingrese un texto' value={inputValue} onChange={handleInputChange}/>
            <div className='focus-line'></div>
        </div>

    </form>
)
} 
AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory