import { Form, Link, useFetcher, useSubmit } from '@remix-run/react'
import { deleteExpense } from '~/data/expenses.server'

function ExpenseListItem({ id, title, amount }) {
  // const submit = useSubmit()
  const fetch = useFetcher()

  function deleteExpenseItemHandler() {
    console.log('delete button clicked')
    // NOTE: submit still causes page to reload. Not great in a SPA.
    // submit(null, { method: 'delete', action: `/expenses/${id}` })
    const proceed = confirm('Are you sure you want to delete?')

    if (!proceed) {
      return
    }

    fetch.submit(null, { method: 'delete', action: `/expenses/${id}` })
  }

  return (
    <article className='expense-item'>
      <div>
        <h2 className='expense-title'>{title}</h2>
        <p className='expense-amount'>${amount.toFixed(2)}</p>
      </div>
      <menu className='expense-actions'>
        {/* <Form */}
        {/*   method='delete' */}
        {/*   action={`/expenses/${id}`} */}
        {/* > */}
        {/*   <button>Delete</button> */}
        {/* </Form> */}
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  )
}

export async function action({ params }) {
  console.log(params)
  const expenseId = params.id
  return await deleteExpense(expenseId)
}

export default ExpenseListItem
