'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useAccount } from 'wagmi'
const axios = require('axios')

const InputGroup = () => {
  const [data, setData] = useState('')

  const { address } = useAccount()
  console.log(address)

  const formik = useFormik({
    initialValues: {
      username: '',
      description: '',
      publicKey: address,
      email: ''
    },
    onSubmit: (values: any) => {
      console.log('giden', values)

      setData(values)
      const options = {
        url: 'http://localhost:45501/user/update',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: values
      }

      axios(options).then((response: any) => {
        console.log(response.status)
      })
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3'>
      <label htmlFor='firstName'>username</label>
      <input
        id='username'
        name='username'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor='lastName'>Desc</label>
      <input
        id='description'
        name='description'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit' className='bg-red-600 py-2 px-4'>
        Submit
      </button>
    </form>
  )
}

export default InputGroup
