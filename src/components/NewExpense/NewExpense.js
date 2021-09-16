import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    function saveExpenseHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    return (
    <div className='new-expense'>
      <ExpenseForm onSaveNewExpense={saveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
