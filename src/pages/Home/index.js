import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import '../../style.css';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ pokemonCards, setPokemonCards ] = useState([]);
  const [ erro, setErro] = useState(false);
  const [ pokeShow, setPokeShow] = useState([]);
				
  function handlePesquisa() { 
	if (procura==='') {
			setPokeShow([...pokemonCards.keys()]);
			return;	
	}
	let lista = [];
	for (let p in pokemonCards) {
		if (pokemonCards[p].name.indexOf(procura)>-1 || pokemonCards[p].types.join('|').indexOf(procura)>-1) {
			lista.push(p);
		}
	}
	setErro(lista.length===0);
	setPokeShow(lista);
  }

  useEffect(() => {
	const dTipos = {'bug':'inseto', 'dark':'noturno', 'dragon':'dragão', 'electric':'elétrico', 
				'fairy':'fada', 'fighting':'lutador', 'fire':'fogo',
				'grass':'grama', 'water':'água', 'normal':'normal',
				'poison':'venenoso', 'ground':'terra', 'psychic':'psíquico',
				'rock':'pedra', 'flying':'voador', 'ghost':'fantasma', 'steel':'metálico'};
    const iniciais = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];

    const pokeList = [];
	    function fazPesquisa(pesquisa, poeNaLista = false) {
	axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`).then(resp => {
		const pokemon = resp.data;
		pokemon.name = resp.data.species.name;
		pokemon.sprite = resp.data.sprites.front_default;
		pokemon.abilities = resp.data.abilities.map(h => { return h.ability.name })
		pokemon.held_items = resp.data.held_items.map(i => { return i.item.name })
		pokemon.moves = resp.data.moves.map(m => { return m.move.name })
		pokemon.types = resp.data.types.map(t => { return t.type.name in dTipos ? dTipos[t.type.name] : t.type.name })
		pokemon.price = resp.data.stats.reduce((a,st) => { return a+st.base_stat**2 },0)/100;
		pokemon.show = true;
		delete pokemon.forms;
		delete pokemon.game_indices;
		delete pokemon.species;
		delete pokemon.sprites;
		pokeList.push(pokemon);
		if (pokeList.length<=40) { 
		let n = Math.floor((Math.random() * 500) + 1);
		while (iniciais.indexOf(n)!==-1) {
			n = Math.floor((Math.random() * 500) + 1);
		}
		iniciais.push(n);
		}
		if (pokeList.length<iniciais.length) { fazPesquisa(iniciais[pokeList.length], true); }
		else {
			setPokemonCards(pokeList); 
			setPokeShow([...pokeList.keys()]); 
			}
			
	})
	.catch(err => {		
	});
  }
		fazPesquisa(iniciais[0], true);
	},[]);
  function renderCard(p_index, i) {
	let p = pokemonCards[p_index];
	if (!p.show) { 
		console.log('oi');
		return '';
	}
	return (<S.Card key={i} ><S.ImagemCard src={p.sprite} />
	<h2>{ p.name.charAt(0).toUpperCase() + p.name.slice(1) }</h2>
  <S.Price>R${ p.price.toFixed(2).replace('.', ',') }</S.Price>
  <p><S.AddToCart>Adicionar ao Carrinho</S.AddToCart></p>	
	</S.Card>)
			
  }
  return (
  <>
  <header>
   <div id="cd-cart-trigger"><a className="cd-img-replace" href="#0">Cart</a></div>
</header>
<main>
</main>
<div id="cd-shadow-layer"></div>

<div id="cd-cart">
   <h2>Cart</h2>
   <ul className="cd-cart-items">
      <li>fgdfg
      </li>

      <li>fdgdgf
      </li>
   </ul> 

   <div className="cd-cart-total">
      <p>Total <span>$39.96</span></p>
   </div> 

   <a href="#0" className="checkout-btn">Checkout</a>

   <p className="cd-go-to-cart"><a href="#0">Go to cart page</a></p>
</div> 
    <S.Container>

    <S.Content>
    <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Nome ou Tipo do Pokémon" value={procura} onChange={e => setProcura(e.target.value.toLowerCase()) } />
	<S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
	{ erro ? <S.ErrorMsg>Nenhum pokémon com esse nome ou tipo disponível na loja.</S.ErrorMsg> : '' }
    <S.Content>
	{ pokeShow.map((p,i) => renderCard(p,i)) }
			</S.Content>
	</S.Container></>
  );
}

export default App;