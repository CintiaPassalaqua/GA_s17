import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('ditto')
  const [ erro, setErro] = useState(false)
  const dTipos = {'bug':'inseto', 'dark':'noturno', 'dragon':'dragão', 'electric':'elétrico', 
				'fairy':'fada', 'fighting':'lutador', 'fire':'fogo',
				'grass':'grama', 'water':'água', 'normal':'normal',
				'poison':'venenoso', 'ground':'terra', 'psychic':'psíquico',
				'rock':'pedra', 'flying':'voador', 'ghost':'fantasma', 'steel':'metálico'}
  function handlePesquisa() { 
	axios.get(`https://pokeapi.co/api/v2/pokemon/${usuario}`).then(resp => {
		console.log(resp);
		const pokemon = resp.data;
		pokemon.sprite = resp.data.sprites.front_default;
		pokemon.abilities = resp.data.abilities.map(h => { return h.ability.name })
		pokemon.held_items = resp.data.held_items.map(i => { return i.item.name })
		pokemon.moves = resp.data.moves.map(m => { return m.move.name })
		pokemon.types = resp.data.types.map(t => { return t.type.name in dTipos ? dTipos[t.type.name] : t.type.name })
		pokemon.price = resp.data.stats.reduce((a,st) => { return a+st.base_stat**2 },0)/100
		delete pokemon.forms;
		delete pokemon.game_indices;
		delete pokemon.species;
		delete pokemon.sprites;
		localStorage.setItem('pokemon', JSON.stringify(pokemon));
		setErro(false);
		history.push('/pokemon');		
	})
	.catch(err => {
		setErro(true);		
	});
  }
  return (
    <S.Container>
    <S.Content>
    <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Pokemon" value={usuario} onChange={e => setUsuario(e.target.value) } />
	<S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
	{ erro ? <S.ErrorMsg>Pokémon {usuario} não encontrado.</S.ErrorMsg> : '' }
	</S.Container>
  );
}

export default App;