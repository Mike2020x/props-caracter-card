import CharacterCard from "./components/CaracterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {data.map((el, id) => (
          <CharacterCard
            key={id}
            name={el.name}
            status={el.status}
            specie={el.species}
            image={el.image}
            lastlocationurl={el.location.url}
            lastlocationname={el.location.name}
            firstseenurl={el.origin.url}
            firstseenname={el.origin.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
