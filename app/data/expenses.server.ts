import { prisma } from './database.server'

// TODO: Always run npx prisma generate!!!

export async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        // form data is always a string. (+) added before to convert string to a number.
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function findExpenses() {
  try {
    return await prisma.expense.findMany()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function findOneExpense(id) {
  try {
    return await prisma.expense.findOne({ _id: id })
  } catch (error) {}
}
