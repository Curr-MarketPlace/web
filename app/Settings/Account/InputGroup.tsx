'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useAccount } from 'wagmi'
import { getUser, updateUser } from '@/data/action/userActions'
const axios = require('axios')
import { useRouter } from 'next/navigation'
const InputGroup = () => {
  const [data, setData] = useState({
    username: '',
    address: '',
    //avatar: '',
    email: '',
    description: ''
  })

  const { address } = useAccount()

  const router = useRouter()
  console.log(address)

  const UpdateUser = async (address: any, data: any) => {
    updateUser(address, data)
      .then((response: any) => {
        console.log(response)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  const formik = useFormik({
    initialValues: {
      username: data.username,
      description: data.description,
      address: address,
      email: data.email
    },
    onSubmit: (values: any) => {
      console.log('giden', values)
      UpdateUser(address, values)

      router.push('/Profile')
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
      <label htmlFor='lastName'>description</label>
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
