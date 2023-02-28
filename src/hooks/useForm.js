import { useState } from "react";



export default function useForm (initialState){
    const [formulario, setFormulario] = useState(initialState)

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setFormulario({...formulario, [name]: value })
    }

    return [formulario, onChangeInput]
}