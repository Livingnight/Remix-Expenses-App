import { redirect } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { updateExpense } from '~/data/expenses.server'
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
  const formData = await request.formData()
  const expenseData = Object.fromEntries(formData)
  const expenseId = params.id

  try {
    validateExpenseInput(expenseData)
  } catch (error) {
    return error
  }

  await updateExpense(expenseId, expenseData)
  return redirect('/expenses')
}

// export async function loader({ params }) {
//   const id = params.id
//
//   const retrievedExpense = await findExpense(id)
//   return retrievedExpense
// }
