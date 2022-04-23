import { useState, useEffect } from "react";
import "./Pokedex.css";
import PokedexScreen from './PokedexScreen'
import PokedexForm from './PokedexForm'


function Pokedex() {
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true)
  const [ pokemon, setPokemon ] = useState(null)
  // se usara para llamar a la api
  const RandomId = Math.floor(Math.random() * 806 +1)
  const [ pokemonId, setPokemonId] = useState(RandomId)

  /* on mounted */
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => res.json())
    .then((data) => {
      setPokemon(data)
      setLoading(false)
      setError(false)
      console.log(data);
    }).catch((error) => {
      setLoading(false)
      setError(true)
      console.error(error);
    })
  }, [])

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className="light is-sky is-big" />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen
            pokemon={pokemon}
            loading={loading}
            error={error}
          />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokedexForm />
        </div>
      </div>
      <div className="pokedex-right-fornt" />
      <div className="pokedex-right-back" />
    </div>
  );
}

export default Pokedex;
