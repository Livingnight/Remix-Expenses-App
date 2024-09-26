import {
  Form,
  Link,
  useActionData,
  useMatches,
  useNavigation,
} from '@remix-run/react'

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10) // yields something like 2023-09-10
  const validationErrors = useActionData()
  // const submit = useSubmit();

  // function submitHandler(event) {
  //   event.preventDefault();
  //   // perform your own validation
  //   // ...
  //   submit(event.target, {
  //     // action: '/expenses/add',
  //     method: 'post',
  //   });
  // }
  const navigation = useNavigation()
  const isSubmitting = navigation.state !== 'idle'

  // const expenseToEdit = useLoaderData()
  // TODO: Already done. Switched from using loader to using useMatch hook to reduce api calls on page reload.
  const matches = useMatches()
  const expenseId = matches[0].params.id

  const expenseToEdit = matches
    .slice(-2)[0]
    .data.find(expense => expense.id === expenseId)

  const defaultExpenseData = expenseToEdit
    ? {
        title: expenseToEdit.title,
        amount: expenseToEdit.amount,
        date: expenseToEdit.date,
      }
    : {
        title: '',
        amount: '',
        date: '',
      }

  return (
    <Form
      method={expenseId ? 'PUT' : 'POST'}
      className='form'
      id='expense-form'
      // onSubmit={submitHandler}
    >
      <p>
        <label htmlFor='title'>Expense Title</label>
        <input
          type='text'
          id='title'
          name='title'
          required
          maxLength={30}
          defaultValue={defaultExpenseData.title}
        />
      </p>

      <div className='form-row'>
        <p>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            name='amount'
            min='0'
            step='0.01'
            required
            defaultValue={defaultExpenseData.amount}
          />
        </p>
        <p>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            max={today}
            required
            defaultValue={
              defaultExpenseData.date
                ? defaultExpenseData.date.slice(0, 10)
                : ''
            }
          />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className='form-actions'>
        {expenseId ? (
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Update Expense'}
          </button>
        ) : (
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Expense'}
          </button>
        )}
        <Link to='..'>Cancel</Link>
      </div>
    </Form>
  )
}

export default ExpenseForm
