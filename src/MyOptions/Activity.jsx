import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Options.css'

const url = "https://www.boredapi.com/api/activity"

const Activity = () => {
  const [activity, setActivity] = useState("")
  const [loading, setLoading] = useState(false)

  const getActivity = async (url) => {
    setLoading(true) // Set loading state to true when starting the request
    const data = await axios.get(url)
    const val = data.data.activity
    setActivity(val)
    setLoading(false) // Set loading state to false when the request is complete
  }

  const newAdv = () => {
    getActivity(url)
  }

//   useEffect(() => {
//     getActivity(url)
//   }, []) // Fetch activity on component mount

  return (
      <div className='kuch'>
        {loading ? (
          <p>Searching...</p> // Display a loading message while waiting
        ) : (
          activity
        )}
        <button onClick={newAdv}>Suggest an Activity</button>
      </div>
  )
}

export default Activity
