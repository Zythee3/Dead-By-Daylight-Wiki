import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { handleCharactersApi } from "../GetCharacters";

function App() {
  const [result, setResult] = useState(null);

  const handleCharacters = async () => {
    const characters = await handleCharactersApi();
    setResult(Object.values(characters));
  };

  useEffect(() => {
    handleCharacters();
  }, []);

  return (
    <>
      <div>
        {Array.isArray(result) &&
          result.map((character) => (
            <div key={character.id}> {/* Alterado de <p> para <div> */}
              <span>Name: </span>{character.name}
              <img src={character.image} alt={`Imagem de ${character.name}`} />
            </div>
          ))}
      </div>
    </>
  );
}

export default App;