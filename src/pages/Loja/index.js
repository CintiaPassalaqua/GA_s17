import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Loja() {
	const [ pokeList, setPokeList ] = useState([]);
	useEffect(() => {
		let pokeData = JSON.parse(localStorage.getItem('pokemon'));
		if (pokeData !=  null) {
			setPokeList(pokeData);
			localStorage.clear();
		} 
	},[]);
	return (
	<S.Container>	
	{ pokeList.map((p, i) => {
	return (<S.Card key={i}><S.ImagemCard src={p.sprite} />
	<h2>{ p.name.charAt(0).toUpperCase() + p.name.slice(1) }</h2>
  <S.Price>R${ p.price.toFixed(2).replace('.', ',') }</S.Price>
  <p><S.AddToCart>Adicionar ao Carrinho</S.AddToCart></p>	
	</S.Card>)
			}) }
	</S.Container>
	)
}