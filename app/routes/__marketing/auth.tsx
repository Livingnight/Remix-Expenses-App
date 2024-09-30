import AuthForm from '~/components/auth/AuthForm'
import authStyles from '~/styles/auth.css'

export default function AuthPage() {
  return <AuthForm />
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }]
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams
  const authMode = searchParams.get('auth') || 'login'

  const formData = await request.formData()
  const credentials = Object.fromEntries(formData)

  //TODO: Validate use input from formdata

  if (authMode === 'login') {
    //TODO: login logic
  } else {
    //TODO: signup logic (create user)
  }
}
