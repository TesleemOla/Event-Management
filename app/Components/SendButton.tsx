"use client"
import React from 'react'

const SendButton = ({btnfunc}:{btnfunc:string}) => {
  return (
    <button type="submit">{btnfunc}</button>
  )
}

export default SendButton