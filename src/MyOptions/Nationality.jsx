import axios from 'axios';
import React, { useState } from 'react';
import "./Options.css"

const url = "https://api.nationalize.io";

const App = () => {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getNationality = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.get(`${url}?name=${name}`);
      const data = response.data;
      if (data.country && data.country.length > 0) {
        const nationality = data.country[0].country_id;
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
	      const nat =  regionNames.of(nationality)
        setNationality(nat);
      } else {
        setNationality("Unknown");
      }
    } catch (error) {
      console.log(error);
      setNationality("Error");
    }
    setIsLoading(false); // Set loading state to false after the request is complete
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getNationality();
  };

  return (
      <div className='kuch'>
        {isLoading ? (
          <p>Guessing...</p> // Display a loading message while fetching the data
        ) : (
          nationality && <p>Nationality: {nationality}</p>
        )}
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
          <input
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={handleInputChange}
            style={{marginBottom:"1vh"}}
          />
          <button type="submit" style={{marginBottom:"4vh"}}>Get Nationality</button>
        </form>
      </div>
  );
};

export default App;
