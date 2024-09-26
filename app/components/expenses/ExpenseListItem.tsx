import { Link } from '@remix-run/react'
import { deleteExpense } from '~/data/expenses.server'

function ExpenseListItem({ id, title, amount }) {
  function deleteExpenseItemHandler() {
    // TODO: implement a delete expense item handler
    console.log('delete button clicked')
    deleteExpense(id)
  }

  return (
    <article className='expense-item'>
      <div>
        <h2 className='expense-title'>{title}</h2>
        <p className='expense-amount'>${amount.toFixed(2)}</p>
      </div>
      <menu className='expense-actions'>
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  )
}

// export async function action({ request, params }) {
//   console.log(params)
//   console.log(request)
//   return await deleteExpense(id)
//   return null
// }
//
export default ExpenseListItem
