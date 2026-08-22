import Cardproduto from "./Cardproduto"
import "./CSSassets/Carrinho.css"
import { useState } from "react";


export default function Carrinho()
{
    const [produtos_selecionado, setProdutosSelecionado] = useState([
        { nome: "Teste", qtd: 1 },
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

    function remover_item(nome_produto) {
        // Cria uma nova lista contendo apenas os produtos que NÃO têm o nome selecionado
        const lista_filtrada = produtos_selecionado.filter(item => item.nome !== nome_produto);
        // Atualiza o estado do React com a nova lista (o item some da tela)
        setProdutosSelecionado(lista_filtrada);
    }

    return(
        <div className='adicionando_produtos'>
            <form onSubmit={manipularEnvio}>
                <input 
                    className="addname" 
                    type="text" 
                    placeholder="Produto..."
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                />
                <input 
                    className="addqtd" 
                    type="number" 
                    min="1"
                    value={qtdInput}
                    onChange={(e) => setQtdInput(e.target.value)}
                />
                <button type="submit">Add 🚀</button>
            </form>
            {produtos_selecionado.map((item) => (
                <div className="card_produto">
                    <Cardproduto nome={item.nome} qtd={item.qtd}></Cardproduto>
                    <p  onClick={() => remover_item(item.nome)}>❌</p>
                </div>
                ))}            
        </div>
    )
}
