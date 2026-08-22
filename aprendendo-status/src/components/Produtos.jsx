import { useParams } from "react-router-dom";
import Cardproduto from "./Cardproduto";
export default function Produtos()
{
    const { id } = useParams(); 

    return(
        <div>
            <h1>Produto: {id}</h1>
            <Cardproduto nome={"café"} qtd={"13"} fechavel={"x"}/>
        </div>
    )
}