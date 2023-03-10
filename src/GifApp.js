import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
const GifApp = () => {
    
    const [categories, setCategories] = useState([""])

    return (
        <div>
            <h2>Gif App</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>

            <ol>
                {categories.map( category => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    )
}
export default GifApp