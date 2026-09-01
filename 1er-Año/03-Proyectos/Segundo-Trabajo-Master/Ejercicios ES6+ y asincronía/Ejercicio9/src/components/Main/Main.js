import "./Main.css";

const getPokemon = async () => {
  const generarId = Math.floor(Math.random() * 151) + 1;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${generarId}`);
    if (!res.ok) throw new Error(`Pokemon no encontrado`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getPokemon;
