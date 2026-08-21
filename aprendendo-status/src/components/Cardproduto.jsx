import { useState } from "react"
import "./CSSassets/cardproduto.css"



export default function Cardproduto({nome,qtd, fechavel})
{
    const [clicado, setClicado] = useState(false)

    function altetarClick()
    {
        setClicado(!clicado)
    }
    return(
        <>
            <div 
            onClick={altetarClick}
            className='cardproduto'>
                
                <p>{clicado? <span>&gt;</span> : ""}{nome}</p>
                <span>Qtd: {qtd}</span>
                {fechavel ? <p>{fechavel}</p>:""}
            </div>
        </>
    )
}