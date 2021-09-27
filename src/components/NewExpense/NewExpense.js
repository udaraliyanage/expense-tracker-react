import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showEditingMode, setShowEditingMode] = useState(false)

    function saveExpenseHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    function onAddExpenseClick(){
        setShowEditingMode(true)
    }

    function onCancelExpenseClick(){
        setShowEditingMode(false)
    }

    return (
    <div className='new-expense'>
        {showEditingMode && <ExpenseForm onSaveNewExpense={saveExpenseHandler} onCancelExpense={onCancelExpenseClick}/>}
        {!showEditingMode && <button onClick={onAddExpenseClick}>Add Expense</button>}
    </div>
  );
};

export default NewExpense;
