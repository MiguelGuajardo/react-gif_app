import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs.js"
const useFetchGifs = (category)=>{
    const [obj,setObj] = useState({
        data:[],
        loading: true
    })

    useEffect( ()=>{
        
        getGifs(category)
            .then(imgs => 
                    setObj({
                        data: imgs,
                        loading: false
                    })
            )

    },[category])

    return obj
}
export default useFetchGifs