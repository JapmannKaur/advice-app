import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import './Advice.css'
// import Activity from './Activity'
import "./Options.css"
const url = "https://api.adviceslip.com/advice"

// const axios = require('axios')
const Advice = () => {
    const [adv, setAdv] = useState("")
    const [loading, setLoading] = useState(false)

    const getAdvice = async (url) => {
        setLoading(true) // Set loading state to true when starting the request
        const data = await axios.get(url)
        const val = data.data.slip.advice
        // console.log(data.data.slip.id)
        setLoading(false) // Set loading state to false when the request is complete
        setAdv(val)
    }

    const newAdv = () => {
        // window.location.reload()
        getAdvice(url)
    }
    // useEffect(()=>{

    //     getAdvice(url)
    // },[])

    // console.log(adv) 

    return (
        <div className='kuch'>
            {loading ? (
                <p>Searching...</p> // Display a loading message while waiting
            ) : (
                adv
            )}
            <button onClick={newAdv}>Give me Advice</button>
        </div>
    )
}

export default Advice