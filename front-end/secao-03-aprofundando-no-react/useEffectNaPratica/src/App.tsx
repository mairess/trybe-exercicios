import React, { useState, useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import { fetchCoordinates } from './services'
import { Greeting } from './components/Greeting'
import { Coordinates } from './types'
import { FiLoader } from 'react-icons/fi';

function App() {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  }

  const [inputData, setInputData] = useState('');
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log('Error fetching data:', error );
      
    }
    }
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
      <Greeting name={ inputData }></Greeting>
      <Input value={ inputData } onChange={ handleChange }/>
      <h2>International Space Station Location Tracker</h2>
      {coordinates ? (
        <div>
          <p>{`Latitude: ${coordinates.latitude}`}</p>
          <p>{`longitude: ${coordinates.longitude}`}</p>
        </div>
      ) : <FiLoader/> }
    </div>
  )
}

export default App
