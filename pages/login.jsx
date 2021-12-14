/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

const login = () => {
  const initialValue = { email: '', password: '' }
  const [userData, setUserData] = useState(initialValue)
  const { email, password } = userData

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({ type: 'NOTIFY', payload: { loading: true } })
    const res = await postData('auth/login', userData)

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.access_token,
        user: res.user,
      },
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    })

    localStorage.setItem('primeiroLogin', true)
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/')
  }, [auth])

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="********"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Mantenha-me conectado!
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <p className="my-2">
          Nao tem conta?
          <Link href="/cadastro">
            <a style={{ color: 'crimson' }}> Registre-se</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default login
