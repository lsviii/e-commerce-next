/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import validate from '../utils/validate'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'

const cadastro = () => {
  const initialValue = { nome: '', email: '', password: '', cf_password: '' }

  const [userData, setUserData] = useState(initialValue)

  const { nome, email, password, cf_password } = userData

  const { state, dispatch } = useContext(DataContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errMsg = validate(nome, email, password, cf_password)

    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/registro', userData)

    if (res.error)
      return dispatch({ type: 'NOTIFY', payload: { error: res.error } })

    console.log(res)

    return dispatch({ type: 'NOTIFY', payload: { success: true } })
  }

  return (
    <div>
      <Head>
        <title>Cadastro de Usuário</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNome"
            aria-describedby="emailHelp"
            placeholder="Digite seu nome"
            name="nome"
            value={nome}
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

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
            name="email"
            value={email}
            onChange={handleInputChange}
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
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirme o Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="********"
            name="cf_password"
            value={cf_password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn bg-success btn-primary w-100">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default cadastro
