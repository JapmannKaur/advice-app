import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Options.css'

const url = "https://restcountries.com/v3.1/all?fields=name,flags"

const Flag = () => {
    const [fact, setFact] = useState(null)
    const [loading, setLoading] = useState(false)

    const getFact = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url)
            const countries = response.data
            const randomIndex = Math.floor(Math.random() * countries.length)
            const randomCountry = countries[randomIndex]
            const fact = {
                countryName: randomCountry.name.common,
                flag: randomCountry.flags.png
            }
            setFact(fact)
        } catch (error) {
            console.error("Error fetching facts:", error)
        }
        setLoading(false)
    }

    const handleGetFact = () => {
        getFact()
    }

    // useEffect(() => {
    //     getFact()
    // }, [])

    return (
        <div className='kuch'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                fact && (
                    <div className='flagz'>
                        <img src={fact.flag} alt="Flag" style={{height:"10vh", width:"10vw"}}/>
                        <h3>{fact.countryName}</h3>
                    </div>
                )
            )}
            <button onClick={handleGetFact}>Country Flags</button>
        </div>
    )
}

export default Flag
