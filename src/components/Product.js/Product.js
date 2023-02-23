import { Botao, Container, Imagem, Nome, Valor } from "./ProductStyled";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext"


export default function Product({ itens }) {
    // console.log(itens)
    const context = useContext(GlobalContext)
    const { carrinho, setCarrinho, soma, setSoma } = context

   

    const adicionaCarrinho = (itens) => {
        let copiaCarrinho = [...carrinho]
        const verificacao = copiaCarrinho.find((produtos) => {
            return produtos.nome === itens.nome
        })

        if (verificacao === undefined) {
            copiaCarrinho.push(itens)
            setSoma(soma + itens.custo)
            setCarrinho(copiaCarrinho)
        } else {
            for (let i in copiaCarrinho) {
                if (copiaCarrinho[i].nome === itens.nome) {
                    copiaCarrinho[i].qt = copiaCarrinho[i].qt + 1
                    setCarrinho(copiaCarrinho)
                    setSoma(soma + copiaCarrinho[i].custo)
                }
            }
        }
    }



    return (
        <Container>
            <Imagem src={itens.imageUrl} />
            <Nome> {itens.nome} </Nome>
            <Valor> R$: {itens.valor} </Valor>
            <Botao onClick={(() => adicionaCarrinho(itens))} >Adicionar ao carrinho</Botao>
        </Container>
    )
}