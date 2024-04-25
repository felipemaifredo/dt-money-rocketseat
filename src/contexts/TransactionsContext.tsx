import { createContext, ReactNode, useState, useEffect } from "react"

const transactionsData: TransactionType[] = [
    {
        id: 1,
        description: "Salário",
        type: "income",
        price: 2500,
        category: "Trabalho",
        createdAt: "24/04/2024"
    },
    {
        id: 2,
        description: "Compra de mantimentos",
        type: "outcome",
        price: 150,
        category: "Alimentação",
        createdAt: "24/04/2024"
    },
    {
        id: 3,
        description: "Pagamento do aluguel",
        type: "outcome",
        price: 1000,
        category: "Moradia",
        createdAt: "24/04/2024"
    },
    {
        id: 4,
        description: "Pagamento do aluguel",
        type: "outcome",
        price: 1000,
        category: "Moradia",
        createdAt: "24/04/2024"
    },
    {
        id: 5,
        description: "Pagamento do aluguel",
        type: "income",
        price: 1000,
        category: "Moradia",
        createdAt: "24/04/2024"
    }
]

interface TransactionType {
    id: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: TransactionType[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [ transactions, setTransactions ] = useState<TransactionType[]>([])

    useEffect(() => {
        async function fetchData(){
            setTransactions(transactionsData)
        }
        fetchData()
    }, [])

    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}