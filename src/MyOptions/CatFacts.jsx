import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Options.css";

const url = "https://cat-fact.herokuapp.com/facts";

const CatFacts = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFact = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      const randomFact = data[Math.floor(Math.random() * data.length)].text;
      setFact(randomFact);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const newFact = () => {
    getFact(url);
  };

//   useEffect(() => {
//     getFact(url);
//   }, []);

  return (
    <div className="kuch">
      {loading ? (
        <p>Searching...</p>
      ) : (
        fact
      )}
      <button onClick={newFact}>Random Cat Fact</button>
    </div>
  );
};

export default CatFacts;
