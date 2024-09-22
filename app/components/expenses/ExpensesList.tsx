import ExpenseListItem from './ExpenseListItem'

function ExpensesList({ expenses }) {
  return (
    <ol className='expenses-list'>
      {expenses.map(expense => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  )
}

export default ExpensesList
