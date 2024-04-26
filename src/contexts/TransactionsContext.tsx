import { createContext, ReactNode, useState } from "react"

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
    addTransaction: (transactionData: TransactionType) => void
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [ transactions, setTransactions ] = useState<TransactionType[]>([])

    function addTransaction(transactionData: TransactionType) {
        setTransactions(prevData => [
            ...prevData,
            {
                id: transactions.length + 1,
                description: transactionData.description,
                type: transactionData.type,
                price: transactionData.price,
                category: transactionData.category,
                createdAt: transactionData.createdAt
            }
        ])
    }
    
    return (
        <TransactionContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}