import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Advice.css'
const url="https://api.adviceslip.com/advice"

// const axios = require('axios')
const Advice = () =>{ 
    const [adv,setAdv] = useState("")

    const getAdvice  = async(url) =>{
        const data = await axios.get(url)
        const val = data.data.slip.advice
        // console.log(data.data.slip.id)
        setAdv(val)
    }

    const newAdv = () =>{
        window.location.reload()
    }
    useEffect(()=>{
        
        getAdvice(url)
    },[])
    // console.log(adv) 
    
    return(
        <div className='myAdv'>
            {adv}
            <button onClick={newAdv}>Give another advice</button> 
        </div>
    )
}

export default Advice