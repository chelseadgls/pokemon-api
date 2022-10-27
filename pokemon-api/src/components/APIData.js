import { useState, useEffect } from 'react'

function APIData(props) {

  const [pokemon, setPokemon] = useState([])
  const getPokemon = async () => {
    const response = await fetch("https://dummydata.netlify.app/pokedex.json")
    const json = await response.json()
    setPokemon(json.pokemon)
  }

  useEffect(() => {}, [])

  if (pokemon.length <= 0) {
    return <><h1>There is no pokemon</h1>
      <button onClick={getPokemon}>Get Pokemon</button>
      </>
  }

  return <div className="pokemon">
    {pokemon.map((poke) => {
      return (
        <div key={poke.id}>
        <h1>{poke.name}</h1>
        <img src={poke.img} alt={poke.name} />
      </div>
      )
    })}
    </div>
}

export default APIData