import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [userType, setUserType] = useState('patient')

  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const users = [
      { email: 'patient@gmail.com', password: '1234', userType: 'patient' },
      { email: 'doctor@gmail.com', password: '1234', userType: 'doctor' },
      { email: 'secretary@gmail.com', password: '1234', userType: 'secretary' },
      { email: 'admin@gmail.com', password: '1234', userType:'admin'}
    ]
    
    if (state === 'Sign Up') {
      console.log(`Inscription en tant que ${userType}`)
      switch(userType) {
        case 'patient':
          navigate('/patient')
          break
        case 'doctor':
          navigate('/doctor') 
          break
        case 'secretary':
          navigate('/secretary')
          break
        default:
          navigate('/')
      }
    } else {
      const foundUser = users.find(u => u.email === email && u.password === password)
      if (foundUser) {
        alert(`Bienvenue ${foundUser.userType}`)
        switch(foundUser.userType) {
          case 'patient':
            navigate('/patient')
            break
          case 'doctor':
            navigate('/doctor')
            break
          case 'secretary':
            navigate('/secretary')
            break
          case 'admin':
            navigate('/admin')
            break
          default:
            navigate('/')
        }
      }else {
        alert("Identifiants invalides")
      }
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        {
          state === "Sign Up" && <><div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
          <div className='w-full'>
              <p className='mb-2'>You are :</p>
              <div className='flex flex-row gap-4'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type="radio"
                    name="userType"
                    value="patient"
                    checked={userType === 'patient'}
                    onChange={(e) => setUserType(e.target.value)}
                    className='w-4 h-4' />
                  <span>Patient</span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type="radio"
                    name="userType"
                    value="doctor"
                    checked={userType === 'doctor'}
                    onChange={(e) => setUserType(e.target.value)}
                    className='w-4 h-4' />
                  <span>Docteur</span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type="radio"
                    name="userType"
                    value="secretary"
                    checked={userType === 'secretary'}
                    onChange={(e) => setUserType(e.target.value)}
                    className='w-4 h-4' />
                  <span>Secrétaire</span>
                </label>
              </div>
            </div></>                                 
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
        <button
          type="submit"
          onClick={onSubmitHandler}
          className='bg-primary text-white w-full py-2 rounded-md text-base'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>
        {
          state ==="Sign Up"
          ? <p>Already have an account? <span onClick = {() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create a new account?<span onClick = {() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span> </p>
        }
      </div>



    </form>
  )
}

export default Login
