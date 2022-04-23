import "./PokedexScreen.css";
import ErrorPokemon from "../assets/errorScreen.gif";
import LoadingPokemon from "../assets/loadingScreen.gif"
import PokedexStat from './PokedexStat'

const PokedexScreen = ({ pokemon, loading, error }) => {
  /* if error */
  if (error) {
    return (
      <div className="pokedex-screen">
        <img
        src={ErrorPokemon}
        alt="Hubo un error buscando tu pokemon"
        className="pokemon-no-screen"
      />
      </div>
      
    );
  };

  /* if loading */
  const loadingElement = () => {
    return (
      <img
        src={LoadingPokemon}
        alt="Loading pokemon"
        className="pokemon-loading-screen"
      />
    );
  };
  
  /* content */
  const dataElement = () => {
    return (
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt="Hubo un error buscando tu pokemon"
          className="pokemon-no-screen"
        />
        <ul className="pokemon-stats">
          {pokemon.stats.map((item) => {
            return <PokedexStat key={item.stat.name} item={item}/>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="pokedex-screen">
      {!pokemon || loading ? loadingElement() : dataElement()}
    </div>
  );
};

export default PokedexScreen;
