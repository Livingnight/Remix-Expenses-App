import authStyles from '~/styles/auth.css'

export default function AuthPage() {
  return (
    <main>
      <h1>The user authentication page</h1>
    </main>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }]
}
