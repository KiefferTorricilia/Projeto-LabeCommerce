import styled from "styled-components";


export const Container = styled.div`
position: absolute;
left: 83vw;
width: 17vw;
height: 50vh;
border: black 1px solid;
display: flex;
gap: 10px;
flex-direction: column;
flex-wrap: wrap;
`

export const TituloCarrinho = styled.div`
width: 16.5vw;
height: 5vh;
position: relative;
left: 0.5vw;
top: 2vh;
`
export const Itens = styled.div`
width: 16.5vw;
display: flex;
justify-content: space-around;
position: relative;
left: 0.5vw;
`

export const BotaoRemover = styled.button`
height: 3vh;
`