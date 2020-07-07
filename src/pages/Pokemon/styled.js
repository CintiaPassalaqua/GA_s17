import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	max-width: 991px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2rem;
	font-family: sans-serif;
	color: #333;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	font-family: sans-serif;
	background: #EEE;
	font-size: 1rem;
	font-family: sans-serif;
	display: block;
	margin: .5rem 0;
	background: #EEE;
	color: #333;
	padding: .5rem;
	text-decoration: none;
`;


export const ListItem = styled.li`
	margin: .1rem 0;
	background: #FFF;
	color: #333;
	padding: .5rem;
	padding-left: 1.5rem;
`;


export const ImagemPerfil = styled.img`
	width: 25%;
	background: #EEE;
	padding: .5rem;
	border-radius: .5rem;
`;

export const LinkHome = styled(Link)`
	display: block;
	width: 4rem;
	text-align: center;
	margin: 2rem auto;
	background-color: #000;
	padding: .5rem 0;
	color: #fff;
	text-decoration: none;
	font-size: 1rem;
	font-family: sans-serif;
`;

export const Info = styled.p`
	font-size: 1rem;
	font-family: sans-serif;
	display: block;
	margin: .5rem 0;
	background: #EEE;
	color: #333;
	padding: .5rem;
	text-decoration: none;
`;