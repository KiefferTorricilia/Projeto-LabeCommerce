import { useContext } from "react"
import Header from "../../components/header/Header"
import Product from "../../components/Product.js/Product"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Container, ContainerFiltros, FiltroNome, Quantidade, Nome, Valor, FiltroValor, Maximo, FiltroMaximo, FiltroOrdem } from "./HomePageStyled"
import Carrinho from "../../components/carrinho/Carrinho"
import useForm from '../../hooks/useForm'

export default function HomePage() {

    const context = useContext(GlobalContext)
    const { produtos, maximo, setMaximo } = context

    const [formulario, onChangeInput] = useForm({nome: "", minimo: "", ordem: "" })


    const onChangeMaximo = (e) => {
        setMaximo(e.target.value)
        if(maximo < 1000){
            setMaximo(50000000)
        }
    }


    return (
        <>
            <Header />
            <ContainerFiltros>
                <Nome>Busca por Nome: </Nome>
                <FiltroNome type="text" placeholder="Busca Por nome" value={formulario.nome} onChange={onChangeInput} name="nome" />
                <Valor>Valor Mínimo:</Valor>
                <FiltroValor type ="number" placeholder="Valor mínimo" value={formulario.minimo} onChange={onChangeInput}  name="minimo" />
                <Maximo>Valor Máximo:</Maximo>
                <FiltroMaximo type="number" placeholder="Valor máximo"  onChange={onChangeMaximo}  name="maximo" />
                <FiltroOrdem onChange={onChangeInput} value={formulario.ordem}  name="ordem" >
                    <option value="" > Ordenar </option>
                    <option value="Crescente" > Crescente </option>
                    <option value="Decrescente" > Decrescente </option>
                </FiltroOrdem>
            </ContainerFiltros>
            <Container>
                <Quantidade>Quantidade de produtos: {produtos.length} </Quantidade>
                {produtos
                .filter((element) => {
                    return element.nome.toLowerCase().includes(formulario.nome.toLowerCase())
                })
                .filter((element) => {
                    return element.custo >= formulario.minimo
                })
                .filter((item) => {
                    return item.custo <= maximo
                })
                .sort((element) => {
                    if(formulario.ordem === "Crescente" ){
                       return  2 - 1 
                    } if(formulario.ordem === "Decrescente" ) {
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