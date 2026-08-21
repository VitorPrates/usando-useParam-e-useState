import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Botao()
{
    const { nome } = useParams(); 
    return(
        
        <button >Produto {nome} <Link to={"/"}>Voltar</Link></button>
        
    )
}