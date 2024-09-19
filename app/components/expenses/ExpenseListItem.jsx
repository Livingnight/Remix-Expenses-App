function ExpenseListItem({ title, amount }) {
  function deleteExpenseItemHandler() {
    // TODO: implement a delete expense item handler
  }

  return (
    <article className='expense-item'>
      <div>
        <h2 className='expense-title'>{title}</h2>
        <p className='expense-amount'>{amount.toFixed(2)}</p>
      </div>
      <menu className='expense-actions'>
        <button onCkick={deleteExpenseItemHandler}>Delete</button>
        <a href='tbd'>Edit</a>
      </menu>
    </article>
  )
}

export default ExpenseListItem
