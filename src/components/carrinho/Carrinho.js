import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, Itens, TituloCarrinho, BotaoRemover } from "./CarrinhoStyled";


export default function Carrinho() {

    const context = useContext(GlobalContext)
    const { carrinho } = context
    // console.log(carrinho)

    
    return (
        <Container>
            <TituloCarrinho>
                Carrinho:
            </TituloCarrinho>
            {carrinho.map((nomes, index) => {
                return (
                    <Itens key={index} > <span> {nomes.qt} </span> <span> {nomes.nome} </span>  <BotaoRemover>Remover</BotaoRemover> </Itens>
                )
            })}
            
        </Container>
    )
}