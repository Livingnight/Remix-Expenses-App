import ExpenseListItem from './ExpenseListItem'

function ExpensesList({ expenses }) {
  return (
    <ol className='expenses-list'>
      {expenses.map(expense => (
        <li key={expense.id}>
          <ExpenseListItem
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  )
}

export default ExpensesList
