import Cardproduto from "./Cardproduto"
import "./CSSassets/Carrinho.css"
import { useState } from "react";


export default function Carrinho()
{
    const [produtos_selecionado, setProdutosSelecionado] = useState([
        { nome: "nome", qtd: 1 },
        { nome: "nome2", qtd: 2 },
    ]);
    const [nomeInput, setNomeInput] = useState("");
    const [qtdInput, setQtdInput] = useState(1);
    function adicionar_item(nome_produto, quantidade) {
        // Verifica se o produto já existe na lista atual
        const produto_existente = produtos_selecionado.find(item => item.nome === nome_produto);

        if (produto_existente) {
            // Se já existe, usamos .map() para criar uma nova lista atualizando a quantidade
            const lista_atualizada = produtos_selecionado.map(item => {
                if (item.nome === nome_produto) {
                    return { ...item, qtd: item.qtd + quantidade };
                }
                return item;
            });
            setProdutosSelecionado(lista_atualizada);
        } else {
            // Se não existe, usamos o operador spread (...) para criar uma nova lista com o novo item
            setProdutosSelecionado([...produtos_selecionado, { nome: nome_produto, qtd: quantidade }]);
        }
    }
    function manipularEnvio(e) {
        e.preventDefault();
        
        // Evita adicionar itens com o nome vazio
        if (!nomeInput.trim()) return;

        // Executa a função passando os valores dos inputs (convertendo a quantidade para número)
        adicionar_item(nomeInput, Number(qtdInput));

        // Limpa os campos do formulário após a inserção
        setNomeInput("");
        setQtdInput(1);
    }

    return(
        <div className='adicionando_produtos'>
            <form onSubmit={manipularEnvio}>
                {/* Conectamos o valor do input ao estado 'nomeInput' */}
                <input 
                    className="addname" 
                    type="text" 
                    placeholder="Nome do produto"
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                />
                {/* Conectamos o valor do input ao estado 'qtdInput' */}
                <input 
                    className="addqtd" 
                    type="number" 
                    min="1"
                    value={qtdInput}
                    onChange={(e) => setQtdInput(e.target.value)}
                />
                <button type="submit">Add 🚀</button>
            </form>
            {produtos_selecionado.map((item) => (<Cardproduto nome={item.nome} qtd={item.qtd} fechavel={"x"}/>))}            
        </div>
    )
}
