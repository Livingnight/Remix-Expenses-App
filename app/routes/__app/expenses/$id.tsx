import { useNavigate } from '@remix-run/react'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { findOneExpense } from '~/data/expenses.server'

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

export async function loader({ params }) {
  console.log('params: ', params)
  const id = params.id
  console.log('Id: ', id)

  const retrievedExpense = await findOneExpense(id)
  console.log('Retrieved Expense: ', retrievedExpense)
  return null
}
