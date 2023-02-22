import { Botao, Container, Imagem, Nome } from "./ProductStyled";
import delorian from '../../assets/delorian.jpeg'


export default function Product () {

    return(
        <Container>
            <Imagem src={delorian} />
            <Nome>Delorian</Nome>
            <Nome>Valor</Nome>
            <Botao>Adicionar ao carrinho</Botao>
        </Container>
    )
}