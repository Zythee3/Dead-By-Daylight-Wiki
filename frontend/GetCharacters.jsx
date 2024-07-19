import axios from "axios";

export const handleCharactersApi = async () => {
  const response = await axios.get("http://localhost:3000/api/characters");
  const characters = response.data;
  console.log("Characters: ", characters);

  return characters;
};
