"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const SendButton = ({btnfunc}:{btnfunc:string}) => {

  const {pending, data, method, action }=useFormStatus()
  return (
    <button type="submit"
    className="text-center my-3 bg-blue-500 text-white p-3 px-2 rounded-2xl cursor-pointer" aria-disabled={pending}>{btnfunc}</button>
  )
}

export default SendButton