const axios = require('axios');

async function obterPokemon(nome){
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    console.log(response)
    return response;
  } catch (error) {
    throw new Error("Não foi possível obter o pokemon pesquisado");
  }
}

module.exports = {obterPokemon};