import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [pokemonData, setPokemonData] = useState([])

  async function getData(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    console.log(response.data.results)
    setPokemonData(response.data.results)

  }

  useEffect(function(){
    getData()
  },[])



  
  return (
    <div>
      {pokemonData.map(function(elem,idx){
        return <h1 key={idx}>{idx+1}.{elem.name}</h1>
      })}
    </div>
  )
}

export default App  