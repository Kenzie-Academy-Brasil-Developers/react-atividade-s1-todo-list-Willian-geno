import { useState } from "react";
import "./Form.css"

function Form (props) {

    const [userInpuit, setUserImput] = useState('')

    return(
        <div cclassName = "DivForm">
            <form >
                <input type="text" value={userInpuit} 
                        onChange = {(event) => setUserImput(event.target.value)} />
            </form>
            <button onClick = {() => props.addTudo(userInpuit)}>Adicionar tafefa</button>
        </div>
    )
}

export default Form;