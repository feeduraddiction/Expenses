import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    props.onEditingCancel(false);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };
    const editingCancelHandler = () => {
      props.onEditingCancel(false);
    }

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" min="0.01" setp="0.0s1" value={enteredAmount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"  onChange={dateChangeHandler} />
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={editingCancelHandler}>Cancel</button>
            <button type="submit">Add expenses</button>
          </div>
          
        </div>
      </form>
    );

};

export default ExpenseForm;
