import { json } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { findExpense } from '~/data/expenses.server'

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
  const id = params.id

  const retrievedExpense = await findExpense(id)
  return json(retrievedExpense)
}
