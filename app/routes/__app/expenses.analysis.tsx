import { useLoaderData } from '@remix-run/react'
import Chart from '~/components/expenses/Chart'
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics'
import { findExpenses } from '~/data/expenses.server'

import expenseAnalysisStyles from '~/styles/expenses.css'

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'First Expense',
//     amount: 12.99,
//     date: new Date().toISOString(),
//   },
//   {
//     id: 'e2',
//     title: 'Second Expense',
//     amount: 15.99,
//     date: new Date().toISOString(),
//   },
// ]
export default function ExpensesAnalysisPage() {
  const expenseData = useLoaderData()
  console.log('Expenses from analysis page: ', expenseData)

  return (
    <main>
      <Chart expenses={expenseData} />
      <ExpenseStatistics expenses={expenseData} />
    </main>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: expenseAnalysisStyles }]
}

export async function loader() {
  return await findExpenses()
}
