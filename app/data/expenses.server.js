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
    const expenses = await prisma.expense.findMany({
      orderBy: { date: 'desc' },
    })
    return expenses
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function findExpense(id) {
  try {
    console.log('Prisma function Id: ', id)
    const expense = await prisma.expense.findFirst({ where: { id } })
    console.log('Found Expense: ', expense)
    return expense
  } catch (error) {
    throw error
  }
}

export async function updateExpense(id, expenseData) {
  try {
    return await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}
export async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id },
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}
