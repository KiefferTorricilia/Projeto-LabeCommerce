import { useContext } from "react"
import Header from "../../components/header/Header"
import Product from "../../components/Product.js/Product"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Container, ContainerFiltros, FiltroNome, Quantidade, Nome, Valor, FiltroValor, Maximo, FiltroMaximo, FiltroOrdem } from "./HomePageStyled"
import Carrinho from "../../components/carrinho/Carrinho"

export default function HomePage() {

    const context = useContext(GlobalContext)
    const { produtos, nome, setNome, minimo, setMinimo, maximo, setMaximo, ordem, setOrdem } = context



    const onChangeNome = (e) => {
        setNome(e.target.value)
    }

    const onChangeValorMinimo = (e) => {
        setMinimo(e.target.value)
    }

    const onChangeMaximo = (e) => {
        setMaximo(e.target.value)
        if(maximo < 1000){
            setMaximo(50000000)
        }
    }

    const onChangeOrdem = (e) => {
        setOrdem(e.target.value)
    }

    return (
        <>
            <Header />
            <ContainerFiltros>
                <Nome>Busca por Nome: </Nome>
                <FiltroNome type="text" placeholder="Busca Por nome" onChange={onChangeNome} />
                <Valor>Valor Mínimo:</Valor>
                <FiltroValor type ="number" placeholder="Valor mínimo" onChange={onChangeValorMinimo}  />
                <Maximo>Valor Máximo:</Maximo>
                <FiltroMaximo type="number" placeholder="Valor máximo" onChange={onChangeMaximo}  />
                <FiltroOrdem onChange={onChangeOrdem} >
                    <option value="" > Ordenar </option>
                    <option value="Crescente" > Crescente </option>
                    <option value="Decrescente" > Decrescente </option>
                </FiltroOrdem>
            </ContainerFiltros>
            <Container>
                <Quantidade>Quantidade de produtos: {produtos.length} </Quantidade>
                {produtos
                .filter((element) => {
                    return element.nome.toLowerCase().includes(nome.toLowerCase())
                })
                .filter((element) => {
                    return element.custo >= minimo
                })
                .filter((item) => {
                    return item.custo <= maximo
                })
                .sort((element) => {
                    if(ordem === "Crescente" ){
                       return  2 - 1 
                    } if(ordem === "Decrescente" ) {
                        return 1 - 2 
                    }
                })
                .map((itens, index) => {
                    return (
                        <Product itens={itens}  key={index} />
                    )
                })}
                <Carrinho/>
            </Container>
        </>
    )
}