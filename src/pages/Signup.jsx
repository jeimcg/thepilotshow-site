import { useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form onSubmit={handleSignup} className="bg-zinc-900 p-6 rounded-lg space-y-4 w-full max-w-sm">
        <h1 className="text-xl font-bold text-center">Sign Up</h1>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-zinc-800 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-zinc-800 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-[#0837F5] hover:bg-[#1958fa] text-white p-2 rounded font-semibold"
        >
          Create Account
        </button>
      </form>
    </section>
  )
}

export default Signup;