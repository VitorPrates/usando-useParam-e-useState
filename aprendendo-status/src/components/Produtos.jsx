import { useParams } from "react-router-dom";

export default function Produtos()
{
    const { id } = useParams(); 

    return(
        <div>
            <h1>Produto: {id}</h1>
        </div>
    )
}