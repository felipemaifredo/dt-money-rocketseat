import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa"
import { LuCircleDollarSign } from "react-icons/lu"
import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"

export const Summary = () => {
    const { transactions } = useContext(TransactionContext)

    const summaryCount = transactions.reduce((acc, transaction) => {
        const price = Number(transaction.price) // Garantindo que price seja interpretado como número
        if (transaction.type === "income") {
            acc.income += price
            acc.total += price
        } else {
            acc.outcome += price
            acc.total -= price
        }
        return acc
    }, { income: 0, outcome: 0, total: 0 })

    return (
       <section className="summary">
            <div className="summary-container">
                <div className="summary-card">
                    <div>
                        <p>Entradas</p>
                        <FaRegArrowAltCircleUp />
                    </div>
                    <p>
                        <strong> R${summaryCount.income} </strong>
                    </p>
                </div>
                <div className="summary-card">
                    <div>
                        <p>Saídas</p>
                        <FaRegArrowAltCircleDown />
                    </div>
                    <p>
                        <strong> - R$ {summaryCount.outcome} </strong>
                    </p>
                </div>
                <div className="summary-card">
                    <div>
                        <p>Saldo</p>
                        <LuCircleDollarSign />
                    </div>
                    <p>
                        <strong> R$ {summaryCount.total} </strong>
                    </p>
                </div>
            </div>
       </section>
    )
}