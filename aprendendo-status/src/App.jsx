import './App.css'
// import Apre from './components/Apre'
import Produtos from './components/Produtos'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Botao from './components/Botao';
import Cardproduto from './components/Cardproduto';
import { useState } from 'react';

function App() {
  const [tela, setTela] = useState(0)

  return (
    <div className='Card-produtos'>
      <header>
        <button
        onClick={() => setTela(0)}
        >tela 1</button>

        <button
        onClick={() => setTela(1)}
        >tela 2</button>
      </header>
      <h2>🛒Lista de compras</h2>

      <hr />
      {(() => {
      switch (tela) {
        case 0:
          return(
            <BrowserRouter>
              <Link to={"/produto/0001"}><Cardproduto nome={"Café Orgânico"} qtd={2}/></Link>
              <Link to={"/produto/0002"}><Cardproduto nome={"Leite integral"} qtd={4}/></Link>
              <Link to={"/produto/0003"}><Cardproduto nome={"Pão de forma"} qtd={1}/></Link>
              <Link to={"/produto/0004"}><Cardproduto nome={"Queijo Prato (g)"} qtd={300}/>  </Link>
              <Routes>
                {/* ":id" acts as a placeholder for any dynamic value */}
                <Route path="/produto/:id" element={<Produtos />} />
              </Routes>
            </BrowserRouter>
          )
        case 1:
          return(
            <div className='adicionando_produtos'>
              <form action="">
                <input className="addname" type="text" />
                <input className="addqtd" type="number" name="" id="" />
                <button>Add &#128640;</button>
              </form>
              <Cardproduto nome={"Café Orgânico"} qtd={2}/>
            </div>
          )
      }
    })()}
    </div>
  )
}

export default App
