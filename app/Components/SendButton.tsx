"use client"
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const SendButton = ({btnfunc}:{btnfunc:string}) => {

  const {pending}=useFormStatus()
  return (
    <button type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      aria-disabled={pending}>{btnfunc}</button>
  )
}

export default SendButton