const axios = require('axios');
const ditto = require('./ditto');
const { obterPokemon } = require('./consumirAPI');

jest.mock('axios');

describe('Teste da função obterPokemon', () => {
  it('Deve verificar se o pokemon pesquisado é o pokemon Ditto', async () => {
    
    axios.get.mockResolvedValue(ditto);
    const pokemon = await obterPokemon('ditto');

    expect(pokemon).toEqual(ditto);
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/ditto');
  });

  it('Deve lançar um erro para pokemon não encontrado', async () => {
    const errorMessage = 'Não foi possível obter o pokemon pesquisado';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(obterPokemon('papagaio')).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/papagaio');
  });
});