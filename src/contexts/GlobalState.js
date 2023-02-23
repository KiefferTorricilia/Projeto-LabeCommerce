import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {

    const [carrinho, setCarrinho] = useState([])
    const [detalhes, setDetalhes] = useState([])
    const [soma, setSoma] = useState(0)

    const produtos =  [
    {
        id: 1,
        nome: "Delorian",
        valor: "25.000",
        custo: 25000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Delorean_DMC-12_side.jpg/640px-Delorean_DMC-12_side.jpg",
        qt: 1,
    },
    {
        id: 2,
        nome: "Skate Voador",
        valor: "100.000",
        custo: 100000,
        imageUrl: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/06/28/150628122651_hoverboard_624x351_lexus.jpg",
        qt:1,
    },
    {
        id: 3,
        nome: "Neuralizador",
        valor: "200.000",
        custo: 200000,
        imageUrl: "https://i.ytimg.com/vi/PEtt23czMV0/maxresdefault.jpg",
        qt: 1 ,
    },
    {
        id: 4,
        nome: "Portal Gun",
        valor: "2.000.000",
        custo: 2000000,
        imageUrl: "https://www.egames.news/__export/1645388725763/sites/debate/img/2022/02/20/portal.jpeg_423682103.jpeg",
        qt: 1 ,
    }
]


    const data = {
        produtos,
        carrinho,
        setCarrinho,
        detalhes,
        setDetalhes,
        soma,
        setSoma,
    }

    return (
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState