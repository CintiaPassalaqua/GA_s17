import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;	
`;


export const Content = styled.div`
	width: 100vw
	display: flex;
	display: flex;
	flex-direction: row;
   flex-wrap: wrap;
   flex-flow: row wrap;
   align-content: flex-start;
	align-items: flex-start;
	justify-content: flex-start;	
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
	background: #FFF;
	border-radius: 1rem 1rem 0 5rem;
`;

