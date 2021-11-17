import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email@email.com"
          />
          <div id="emailHelp" className="form-text"></div>
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
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Mantenha-me conectado!
          </label>
        </div>
        <button type="submit" className="btn btn-primary bg-success w-100">
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
