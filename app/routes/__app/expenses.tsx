// /expenses => shared layout
import { FaPlus, FaDownload } from 'react-icons/fa'

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
//     amount: 16.99,
//     date: new Date().toISOString(),
//   },
// ]

import { Link, Outlet, useLoaderData } from '@remix-run/react'
import ExpensesList from '~/components/expenses/ExpensesList'
import { findExpenses } from '~/data/expenses.server'
import { json } from '@remix-run/node'

export default function ExpensesLayout() {
  const expenses = useLoaderData()
  console.log('Expenses from main Expenses page: ', expenses)
  return (
    <>
      <Outlet />
      <main>
        <section id='expenses-actions'>
          <Link to='add'>
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href='/expenses/raw'>
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  )
}

export async function loader() {
  const retrievedExpenses = await findExpenses()
  console.log(retrievedExpenses)
  return json(retrievedExpenses)
}
