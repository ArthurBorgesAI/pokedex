const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  };

export default getPokemonData;