import { Botao, Container, Imagem, Nome, Valor } from "./ProductStyled";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext"


export default function Product ({itens}) {
    // console.log(itens)
    const context = useContext(GlobalContext)
    const { produtos, carrinho, setCarrinho } = context

  

    const adicionaCarrinho = (itens) => {
        let copiaCarrinho = [...carrinho]
        const verificacao = copiaCarrinho.find((produtos) => {
            return produtos.nome === itens.nome
        })
        if(verificacao === undefined){
            copiaCarrinho.push(itens)
            setCarrinho(copiaCarrinho)
        }else{
            copiaCarrinho
            .map((element) => {
                return element.qt = element.qt + 1
            })
            console.log(copiaCarrinho)
            setCarrinho(copiaCarrinho)
            // copiaCarrinho[0].qt++
            // console.log(copiaCarrinho)
        }
       
    }

    
    return(
        <Container>
            <Imagem src={itens.imageUrl} />
            <Nome> {itens.nome} </Nome>
            <Valor> R$: {itens.valor} </Valor>
            <Botao onClick={(() => adicionaCarrinho(itens))} >Adicionar ao carrinho</Botao>
        </Container>
    )
}