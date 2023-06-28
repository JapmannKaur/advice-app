import axios from 'axios';
import React, { useState } from 'react';
import './Options.css';

const Flag = () => {
    const [country, setCountry] = useState('');
    const [flag, setFlag] = useState(null);
    const [loading, setLoading] = useState(false);

    const getFlag = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
            const countryData = response.data[0];
            if (countryData) {
                const { name, flags } = countryData;
                setFlag({ countryName: name.common, flag: flags.png });
            } else {
                setFlag(null);
                console.log('Country not found');
            }
        } catch (error) {
            console.error('Error fetching flag:', error);
        }
        setLoading(false);
    };

    const handleGetFlag = () => {
        getFlag();
    };

    return (
        <div className='kuch'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                flag && (
                    <div className='flagz'>
                        {/* <h4>{flag.countryName}</h4> */}
                        <img src={flag.flag} alt='Flag' style={{ height: '6.5vh', width: '6.5vw'}} />
                    </div>
                )
            )}
            <input
                type='text'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder='Enter country name'
            />
            <button onClick={handleGetFlag}>Show Flag</button>
        </div>
    );
};

export default Flag;
