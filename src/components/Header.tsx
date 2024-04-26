import logo from "../assets/Logo.svg"
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from "react-icons/io";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { TransactionContext } from "../contexts/TransactionsContext";
import { useContext, useState, useEffect } from "react"

interface TransactionDataType {
    id: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
}

export const Header = () => {
    const { addTransaction, transactions } = useContext(TransactionContext)
    const [transactionData, setTransactionData] = useState<TransactionDataType>( {} as TransactionDataType )
    const [newTransactionOpen, setNewTransactionOpen] = useState(false)

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTransactionData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }))
    }

    useEffect(() => {
        function createDate() {
            const date = new Date()
            const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            const day = date.getDate()
            const month = months[date.getMonth()]
            const year = date.getFullYear()
            setTransactionData( (prevClass) => ({ ...prevClass, createdAt: `${day} / ${month} / ${year}` }))
        }
    
        function createID() {
            setTransactionData( (prevClass) => ({ ...prevClass, id: transactions.length + 1 }))
        }

        createID()
        createDate()
    }, [newTransactionOpen, transactions.length])

    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault()
        addTransaction(transactionData)
    }

    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button onClick={ () => setNewTransactionOpen(!newTransactionOpen) }> Nova transação </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <div>
                                <Dialog.Title> Nova transação </Dialog.Title>
                                <Dialog.Close>
                                    <IoMdClose />
                                </Dialog.Close>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    placeholder="Nome"
                                    name="description"
                                    onChange={handleInputChange}
                                />
                                <input 
                                    placeholder="Valor"
                                    name="price"
                                    onChange={handleInputChange}
                                />
                                <input 
                                    placeholder="Categoria"
                                    list="categories"
                                    name="category"
                                    onChange={handleInputChange}
                                />
                                <datalist id="categories">
                                    <option>Alimentação</option>
                                    <option>Moradia</option>
                                    <option>Transporte</option>
                                    <option>Saúde</option>
                                    <option>Educação</option>
                                    <option>Lazer e entretenimento</option>
                                    <option>Roupas e acessórios</option>
                                    <option>Economias e investimentos</option>
                                    <option>Dívidas</option>
                                    <option>Outros</option>
                                </datalist>
                                <div className="transaction-type">
                                    <input 
                                        type="radio" 
                                        id="transaction-plus" 
                                        name="type"
                                        value="income"
                                        onChange={handleInputChange}

                                    />
                                    <label className="plus" htmlFor="transaction-plus">
                                        <FaRegArrowAltCircleUp />
                                        <p>Entrada</p>
                                    </label>
                                    <input 
                                        type="radio"
                                        id="transaction-minus"
                                        name="type" 
                                        value="outcome"
                                        onChange={handleInputChange}
                                    />
                                    <label className="minus" htmlFor="transaction-minus">
                                        <FaRegArrowAltCircleDown />
                                        <p>Saída</p>
                                    </label>
                                </div>
                                <button type="submit"> Adicionar </button>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </header>
    )
}