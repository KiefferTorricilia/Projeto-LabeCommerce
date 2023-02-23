import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, Itens, TituloCarrinho, BotaoRemover } from "./CarrinhoStyled";


export default function Carrinho() {

    const context = useContext(GlobalContext)
    const { carrinho, setCarrinho, soma, setSoma } = context



    const removerCarrinho = (nomes) => {

        if (nomes.qt === 1) {
            const filtro = carrinho.filter((element) => {
                return element !== nomes
            })
            setCarrinho(filtro)
            setSoma(soma - nomes.custo)
        } else {
            const copiaCarrinho = [...carrinho]
            for (let i in copiaCarrinho) {
                if (copiaCarrinho[i].nome === nomes.nome) {
                    copiaCarrinho[i].qt = copiaCarrinho[i].qt - 1
                    setCarrinho(copiaCarrinho)
                    setSoma(soma - copiaCarrinho[i].custo )
                }
            }
        }

    }



    return (
        <Container>
            <TituloCarrinho>
                Carrinho:
            </TituloCarrinho>
            {carrinho.map((nomes, index) => {
                return (
                    <Itens key={index} > <span> {nomes.qt} </span> <span> {nomes.nome} </span>  <BotaoRemover onClick={() => { removerCarrinho(nomes) }} >Remover</BotaoRemover> </Itens>
                )
            })}
            <p>Total: R${soma},00 </p>

        </Container>
    )
}