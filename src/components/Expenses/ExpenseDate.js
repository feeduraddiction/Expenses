import './ExpenseDate.css'

function ExpanseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  // console.log(props)

  return (
    <div className = 'expense-date'>
      <div className = 'exense-date__month'>{month}</div>
      <div className = 'expense-date__year'>{year}</div>
      <div className = 'expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpanseDate;
