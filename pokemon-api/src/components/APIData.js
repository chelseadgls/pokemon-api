import { useState, useEffect } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function APIData({ props }) {
  const [pokemon, setPokemon] = useState([])
  const [current, setCurrent] = useState(0)
  const length = pokemon.length

  const getPokemon = async () => {
    const response = await fetch("https://dummydata.netlify.app/pokedex.json")
    const json = await response.json()
    setPokemon(json.pokemon)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  // if (pokemon.length <= 0) {
  //   return <><h1>There is no pokemon</h1>
  //     <button onClick={getPokemon}>Get Pokemon</button>
  //     </>
  // }

  // return <div className="pokemon">
  //   {pokemon.map((poke) => {
  //     return (
  //       <div key={poke.id}>
  //       <h1>{poke.name}</h1>
  //       <img src={poke.img} alt={poke.name} />
  //     </div>
  //     )
  //   })}
  //   </div>

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(pokemon) || pokemon.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide}  />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {pokemon.map((poke, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <>
              <img src={poke.img} />
              <p>{poke.name}</p>
              </>)}
          </div>
      )
    })}
    </section>
  )
}

export default APIData