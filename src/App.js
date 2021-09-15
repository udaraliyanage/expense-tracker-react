import ExpensePanel from './components/Expenses/ExpensePanel';
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

function App() {

    let expenses = [
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

    const [items, setItems] = useState(expenses)
    const addExpenseHandler = expense => {
        console.log("#Main App###")
        console.log(expense)
        const e = {
            description: 'New Item',
            date: new Date(2021, 8, 22),
            amount: 200
        }

        setItems([...items, e])
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpensePanel items={items}/>
        </div>
    );
}

export default App;
