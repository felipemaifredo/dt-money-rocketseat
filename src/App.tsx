import { useContext, useState } from "react"
import "./App.css"
import { Header } from "./components/Header"
import { Summary } from "./components/Summary"
import { FaSearch } from "react-icons/fa"
import { TransactionContext } from "./contexts/TransactionsContext"
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const { transactions, removeTransaction } = useContext(TransactionContext)
  const [ filter, setFilter ] = useState("")
  const [ termSearch, setTermSearch ] = useState("")

  function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault()
    setFilter(termSearch)
  }

  function handleDelete(id: number){
    removeTransaction(id)
  }

  return (
    <>
      <Header />
      <Summary />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Busque uma transação" onChange={(e) => setTermSearch(e.target.value)} />
          <button type="submit"> <FaSearch /> Buscar </button>
        </form>
      </div>
      <div className="transactions-container">
        <table>
          {transactions
            .filter(transaction => transaction.description.toLowerCase().includes(filter.toLowerCase()))
            .map((transaction) => (
            <tr className={transaction.type === "income" ? "plus" : "minus"}>
              <td>{transaction.description}</td>
              <td>{transaction.type === "income" ? "" : "-"}  R$ {transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
              <td>
                <button onClick={ () => handleDelete(transaction.id) }>
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}

        </table>
      </div>
    </>
  )
}

export default App
