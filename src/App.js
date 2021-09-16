import ExpensePanel from './components/Expenses/ExpensePanel';
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

function App() {

    let initialExpenses = [
        {
            description: 'Singleton',
            date: new Date(2021, 8, 22),
            amount: 200
        },
        {
            description: 'Bite',
            date: new Date(2021, 8, 5),
            amount: 20
        },
        {
            description: 'Cab',
            date: new Date(2021, 8, 8),
            amount: 14
        },
        {
            description: 'Icecube',
            date: new Date(2021, 8, 14),
            amount: 2
        },
        {
            description: 'Ciga',
            date: new Date(2021, 8, 14),
            amount: 14
        }
    ]

    const [expenses, setExpenses] = useState(initialExpenses)
    const addExpenseHandler = expense => {
        setExpenses(previousExpenses => {
            return [expense,...previousExpenses]
        })
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpensePanel items={expenses}/>
        </div>
    );
}

export default App;
