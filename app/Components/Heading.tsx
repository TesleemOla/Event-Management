import React from 'react'

const Heading = ({heading}:{heading: string}) => {
  return (
    <h3 className="font-extrabold text-2xl text-center my-4">
      {heading}
    </h3>
  )
}

export default Heading