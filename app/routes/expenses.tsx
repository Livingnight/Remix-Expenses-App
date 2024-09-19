import { Outlet } from '@remix-run/react'

import expenseStyles from '~/styles/expenses.css'
export default function ExpensesListPage() {
  return (
    <main>
      <h1>A Shared Element between all the expense page routes</h1>
      <Outlet />
    </main>
  )
}

export const links = () => {
  return [{ rel: 'stylesheet', href: expenseStyles }]
}
