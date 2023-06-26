import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Options from './Options'
import "./Options.css"

const url = "https://official-joke-api.appspot.com/random_joke"

const Joke = () => {
  const [joke, setJoke] = useState("")
  const [joke2, setJoke2] = useState("")
  const [loading, setLoading] = useState(false)

  const getJoke = async (url) => {
    setLoading(true) // Set loading state to true when starting the request
    const data = await axios.get(url)
    // console.log(data)
    const val = data.data.punchline
    const val2 = data.data.setup
    setJoke2(val2)
    setJoke(val)
    setLoading(false) // Set loading state to false when the request is complete
  }

  const newAdv = () => {
    getJoke(url)
  }

  return (
      <div className='kuch'>
        {loading ? (
          <p>Searching...</p> // Display a loading message while waiting
        ) : (
          <>
            {joke2}
            {joke}
          </>
        )}
        <button onClick={newAdv}>Make me laugh</button>
      </div>
  )
}

export default Joke
