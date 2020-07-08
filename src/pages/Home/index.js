import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled'

function App(props) {
  const [ procura, setProcura ] = useState('ditto')
  const [ pokemon, setPokemon ] = useState({name:'', price:0})
  const [ pokemonCards, setPokemonCards ] = useState([])
  const [ erro, setErro] = useState(false)
  const dTipos = {'bug':'inseto', 'dark':'noturno', 'dragon':'dragão', 'electric':'elétrico', 
				'fairy':'fada', 'fighting':'lutador', 'fire':'fogo',
				'grass':'grama', 'water':'água', 'normal':'normal',
				'poison':'venenoso', 'ground':'terra', 'psychic':'psíquico',
				'rock':'pedra', 'flying':'voador', 'ghost':'fantasma', 'steel':'metálico'};
  const iniciais = ['pikachu', 'bulbasaur', 'charmander', 'squirtle', 
				Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 500) + 1)];
				
  function handlePesquisa() { 
	fazPesquisa(procura.toLowerCase());
  }
  function fazPesquisa(pesquisa, poeNaLista = false) { 
	axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`).then(resp => {
		const pokemon = resp.data;
		pokemon.sprite = resp.data.sprites.front_default;
		pokemon.abilities = resp.data.abilities.map(h => { return h.ability.name })
		pokemon.held_items = resp.data.held_items.map(i => { return i.item.name })
		pokemon.moves = resp.data.moves.map(m => { return m.move.name })
		pokemon.types = resp.data.types.map(t => { return t.type.name in dTipos ? dTipos[t.type.name] : t.type.name })
		pokemon.price = resp.data.stats.reduce((a,st) => { return a+st.base_stat**2 },0)/100;
		delete pokemon.forms;
		delete pokemon.game_indices;
		delete pokemon.species;
		delete pokemon.sprites;
		setPokemon(pokemon);
		setErro(false);
		let teste = pokemonCards;
		teste.push(pokemon);
		setPokemonCards(teste);
		if (pokemonCards.length<iniciais.length) { fazPesquisa(iniciais[pokemonCards.length], true); }
			
	})
	.catch(err => {
		setErro(true);	
	});
  }
  useEffect(() => {
		fazPesquisa(iniciais[0], true);
	},[]);
  
  return (
    <S.Container>
    <S.Content>
    <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Pokemon" value={procura} onChange={e => setProcura(e.target.value) } />
	<S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
	{ erro ? <S.ErrorMsg>Pokémon {procura} não encontrado.</S.ErrorMsg> : '' }
    <S.Content>
	{ pokemonCards.map((p, i) => {
	return (<S.Card key={i}><S.ImagemCard src={p.sprite} />
	<h2>{ p.name.charAt(0).toUpperCase() + p.name.slice(1) }</h2>
  <S.Price>R${ p.price.toFixed(2).replace('.', ',') }</S.Price>
  <p><S.AddToCart>Adicionar ao Carrinho</S.AddToCart></p>	
	</S.Card>)
			}) }
			</S.Content>
	</S.Container>
  );
}

export default App;