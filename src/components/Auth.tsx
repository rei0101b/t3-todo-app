import { signIn }from 'next-auth/react'

export const Auth = () => {
  return (
    <div>
      <button
        className="rounded bg-blue-600 py-2 px-4 front-bold text-white hover:bg-blue-800"
        onClick={() => signIn('github')}
      >
        Github Auth
      </button>
    </div>
  )
}
