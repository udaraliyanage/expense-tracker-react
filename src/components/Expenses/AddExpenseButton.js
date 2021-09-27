import React from "react";
import './AddExpenseButton.css';

const AddExpenseButton = (props) => {
    function addExpenseClickHandler() {
        props.onAddExpenseButton();
    }

    return(
        <div className='new-expense__actions'>
            <button type='submit' onClick={addExpenseClickHandler}>Add Expense</button>
        </div>
    )
};

export default AddExpenseButton;