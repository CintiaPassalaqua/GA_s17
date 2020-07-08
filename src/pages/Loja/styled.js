import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	max-width: 991px;
	margin: 0 auto;	
	height: 100vh;
	display: flex;
	flex-direction: row;
   flex-wrap: wrap;
   flex-flow: row wrap;
   align-content: flex-start;
	align-items: flex-start;
	justify-content: flex-start;	
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
	width: 50%;
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



export const Content = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;



export const Input = styled.input`
	border: 1px solid #ddd;
	height: 1.5rem;
	padding: 0 .5rem;
	border-radius: .25rem 0 0 .25rem;
	
	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const Button = styled.button`
	border: 1px solid #000;
	height: 1.5rem;
	border-radius: 0 .25rem .25rem 0;
	color: #fff;
	background: #000;
	
	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const ErrorMsg = styled.span`
	display: block;
	font-size: 0.9rem;
	color: red;
	font-weight: 600;
	margin-top: 1rem;
`;

export const Card = styled.div`{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 2rem;
  padding: 0;
  text-align: center;
  font-family: arial;
  border-radius: 1rem;
  &h1 {
		color: red;
	}
`;

export const Price = styled.p`{
  color: grey;
  font-size: 22px;
`;

export const AddToCart = styled.button`{
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  margin: 0;
  
	&:hover {
		opacity: 0.8;
	}
`;

export const ImagemCard = styled.img`
	width: 100%;
	background: #EEE;
	margin: 0;
	padding: 0;
	border-radius: 1rem 1rem 0 5rem;
`;
