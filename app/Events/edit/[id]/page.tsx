"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const SingleEvent = () => {
    const {id} = useParams()

  return (
    <div>
        Event {id}
    </div>
  )
}

export default SingleEvent