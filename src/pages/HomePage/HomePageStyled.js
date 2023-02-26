import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 0.5vw;
flex-wrap: wrap;
`

export const Quantidade = styled.div`
width: 100vw;
`

export const ContainerFiltros = styled.div`
display: flex;
height: 14vh;
flex-direction: column;
gap: 2vh;
`

export const FiltroNome = styled.input`
height: 4vh;
width: 15vw;
position: relative;
top: 2vh;
left: 1vw;
/* border-style: none; */
`
export const Nome = styled.div`
position: relative;
top: 3.5vh;
left: 1vw;
`

export const Valor = styled.div`
position: relative;
left: 18vw;
bottom: 7vh;
`

export const FiltroValor = styled.input`
height: 4vh;
width: 15vw;
position: relative;
bottom: 8.5vh;
left: 18vw;
`

export const Maximo = styled.div`
position: relative;
left: 35vw;
bottom: 17.5vh;
`
export const FiltroMaximo = styled.input`
position: relative;
height: 4vh;
width: 15vw;
left: 35vw;
bottom: 19vh;
`

export const FiltroOrdem = styled.select`
width: 10vw;
position: relative;
left: 55vw;
bottom: 25vh;

`
