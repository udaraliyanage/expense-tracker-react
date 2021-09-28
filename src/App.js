import ExpensePanel from './components/Expenses/ExpensePanel';
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

function App() {

    let initialExpenses = [
        {
            description: 'Singleton',
            date: new Date(2020, 7, 22),
            amount: 200,
            id : 1
        },
        {
            description: 'Bite',
            date: new Date(2021, 8, 5),
            amount: 20,
            id : 2
        },
        {
            description: 'Cab',
            date: new Date(2021, 3, 8),
            amount: 14,
            id : 3
        },
        {
            description: 'Icecube',
            date: new Date(2020, 8, 14),
            amount: 20,
            id : 4
        },
        {
            description: 'Cab',
            date: new Date(2020, 8, 10),
            amount: 20,
            id : 4
        },
        {
            description: 'Ciga',
            date: new Date(2019, 8, 14),
            amount: 14,
            id : 5
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
