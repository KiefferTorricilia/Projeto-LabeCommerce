import { useContext } from "react"
import Header from "../../components/header/Header"
import Product from "../../components/Product.js/Product"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Container } from "./HomePageStyled"
import Carrinho from "../../components/carrinho/Carrinho"

export default function HomePage() {

    const context = useContext(GlobalContext)
    const { produtos } = context

    return (
        <>
            <Header />
            <h1>Espaço para os filtros</h1>
            <p>Quantidade de produtos: {produtos.length} </p>
            <Container>
                {produtos.map((itens, index) => {
                    return (
                        <Product itens={itens}  key={index} />
                    )
                })}
                <Carrinho/>
            </Container>
        </>
    )
}