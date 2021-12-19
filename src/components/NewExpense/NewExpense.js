
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false)
const saveExpenseDataHandler = (enteredExpenseData)  => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  props.onAddExpense(expenseData)

}
  const editingHandler = () => {
    setIsEditing(true);
  }

  const getCancel = (value) => {
    setIsEditing(value);
  }
  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick = {editingHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onEditingCancel={getCancel}/>}
    </div>
  );
};

export default NewExpense;
