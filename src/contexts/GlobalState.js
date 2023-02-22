import { GlobalContext } from "./GlobalContext";



const GlobalState = (props) => {

    
const data = {

    }

    return(
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState