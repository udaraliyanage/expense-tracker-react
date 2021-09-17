import './ExpensePanel.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function ExpensePanel(props) {

    const [selectedYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let expenseItems = props.items
        .filter(i => i.date.getFullYear().toString() === selectedYear)
        .map(expense =>
            (
                <ExpenseItem
                    key={expense.id}
                    title={expense.description}
                    date={expense.date}
                    amount={expense.amount}
                />
            )
        );
    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
            {expenseItems}
        </Card>
    )
}


export default ExpensePanel