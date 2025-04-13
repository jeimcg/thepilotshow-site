import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard')
      }
    })
    return () => unsubscribe()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="bg-zinc-900 p-6 rounded-lg space-y-4 w-full max-w-sm">
        <h1 className="text-xl font-bold text-center">Log In</h1>

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
          Log In
        </button>
      </form>
    </section>
  )
}

export default Login;