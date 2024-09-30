import { redirect } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { deleteExpense, updateExpense } from '~/data/expenses.server'
import { validateExpenseInput } from '~/data/validation.server'
// import { findExpense } from '~/data/expenses.server'

export default function ExpenseDetailsPage() {
  const navigate = useNavigate()
  function closeHandler() {
    navigate('..')
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  )
}

export async function action({ request, params }) {
  const expenseId = params.id

  // NOTE: parsing for http method so action can handle multiple forms.
  if (request.method === 'PUT') {
    const formData = await request.formData()
    const expenseData = Object.fromEntries(formData)

    try {
      // NOTE: testing validity of input on the server side
      validateExpenseInput(expenseData)
    } catch (error) {
      return error
    }
    await updateExpense(expenseId, expenseData)
    return redirect('/expenses')
  } else if (request.method === 'DELETE') {
    console.log('delete request reached')
    await deleteExpense(expenseId)
    return redirect('/expenses')
  }
}

// export async function loader({ params }) {
//   const id = params.id
//
//   const retrievedExpense = await findExpense(id)
//   return retrievedExpense
// }
