import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./Options.css"

const url = "http://numbersapi.com/random/math"

const Maths = () => {
    const [math,setMath] = useState("")
    const [loading,setLoading] = useState(false)

    const getMath = async (url) => {
        setLoading(true)
        const data = await axios.get(url)
        const val = data.data
        setLoading(false)
        setMath(val)
    }

    const newAdv = () => {
        // window.location.reload()
        getMath(url)
    }

    return (
        <div className='kuch'>
            {loading ? (
                <p>Searching...</p> // Display a loading message while waiting
            ) : (
                math
            )}
            <button onClick={newAdv}>Random Math Fact</button>
        </div>
    )
}
export default Maths