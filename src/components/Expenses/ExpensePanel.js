import './ExpensePanel.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function ExpensePanel(props) {
    var expenseItems = props.items.map(expense =>
        (
            <ExpenseItem
                title={expense.description}
                date={expense.date}
                amount={expense.amount}
            />
        )
    );
    return (
        <Card className="expenses">
            {expenseItems}
        </Card>
    )
}

export default ExpensePanel