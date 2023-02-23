import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, Itens, TituloCarrinho, BotaoRemover } from "./CarrinhoStyled";


export default function Carrinho() {

    const context = useContext(GlobalContext)
    const { carrinho, soma } = context

   

    const removerCarrinho = () => {
        carrinho.filter((element) => {
            
        })
    }

    
    
    return (
        <Container>
            <TituloCarrinho>
                Carrinho:
            </TituloCarrinho>
            {carrinho.map((nomes, index) => {
                return (
                    <Itens key={index} > <span> {nomes.qt} </span> <span> {nomes.nome} </span>  <BotaoRemover onClick={removerCarrinho} >Remover</BotaoRemover> </Itens>
                )
            })}
            <p>Total: {soma} </p>
            
        </Container>
    )
}