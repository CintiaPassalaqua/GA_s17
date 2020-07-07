import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Pokemon() {
	const [ pokemon, setPokemon ] = useState({name: '', types:[], price: 0, abilities:[], held_items:[], moves:[]});
	useEffect(() => {
		let pokemonData = JSON.parse(localStorage.getItem('pokemon'));
		if (pokemonData !=  null) {
			setPokemon(pokemonData);
			console.log(pokemonData);
			localStorage.clear();
		}
	},[]);
	return (
	<S.Container>
		<S.Title>{ pokemon.name.toUpperCase() }</S.Title>
		<S.ImagemPerfil src={pokemon.sprite} />	
		<S.Info><strong>Preço:</strong> R${ pokemon.price.toFixed(2).replace('.', ',') }</S.Info>
		<S.Info><strong>Experiência:</strong> { pokemon.base_experience }</S.Info>
		<S.Info><strong>Altura:</strong> { pokemon.height*10 }cm</S.Info>
		<S.Info><strong>Peso:</strong> { (pokemon.weight/10).toFixed(1).replace('.', ',') }kg</S.Info>
		<S.Info><strong>Tipo:</strong> { pokemon.types.join('/') }</S.Info>
		<S.List>	
		<strong>{	pokemon.abilities.length>0 ? 'Habilidades' : '' }</strong>
		{ pokemon.abilities.map((h, i) => {
			return (<S.ListItem key={i}>{h}</S.ListItem>)
		}) }
		</S.List>	
		<S.List>	
		<strong>{	pokemon.moves.length>0 ? 'Moves' : '' }</strong>
		{ pokemon.moves.map((h, i) => {
			return (<S.ListItem key={i}>{h}</S.ListItem>)
		}) }
		</S.List>				
		<S.List>
		<strong>{	pokemon.held_items.length>0 ? 'Itens' : '' }</strong>
			{ pokemon.held_items.map((h, i) => {
			return (<S.ListItem key={i}>{h}</S.ListItem>)
			}) }
		</S.List> 		
		<S.LinkHome to="/">Voltar</S.LinkHome>
	</S.Container>
	)
}