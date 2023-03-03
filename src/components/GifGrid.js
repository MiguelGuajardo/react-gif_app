import React from 'react'

import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category)

    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='card animate__animated animate__flash'>Loading...</p>}

            {<div className='cardContainer'>
                    {images.map((img) =>{
                        return (
                            <GifGridItem key={img.id} {...img} />
                        )
                    })}
            </div>}
        </>
    )
}
export default GifGrid