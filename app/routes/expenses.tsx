import { Outlet } from '@remix-run/react'
import ExpensesList from '~/components/expenses/ExpensesList'

import expenseStyles from '~/styles/expenses.css'
export default function ExpensesListPage() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'First Expense',
      amount: 12.99,
      date: new Date().toISOString(),
    },
    {
      id: 'e2',
      title: 'Second Expense',
      amount: 15.99,
      date: new Date().toISOString(),
    },
  ]

  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}

export const links = () => {
  return [{ rel: 'stylesheet', href: expenseStyles }]
}
