import "./App.css"
import { Header } from "./components/Header"
import { Summary } from "./components/Summary"
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <Summary />
      <div className="form-container">
        <form>
          <input type="text" placeholder="Busque uma transação" />
          <button type="submit"> <FaSearch /> Buscar </button>
        </form>
      </div>
      <div className="transactions-container">
        <table>
          <tr className="plus">
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr className="minus">
            <td>Hamburguer</td>
            <td>- R$ 50,00</td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
