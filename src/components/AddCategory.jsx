import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
    // console.log(setCategorias)
    const [inputValue, setInputValue] = useState('')
    const onChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
        // console.log(inputValue)
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChange}
            />
        </form>
    )
}
