import React from 'react'

type Inputprops={
   id: string, name: string, label: string
}
const InputField = ({
    id, name, label,
}:Inputprops) => {
  return (
    <div className="flex flex-col">
          <label htmlFor={id}>{label}</label>
          <input
              className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
              id={id}
              type="text"
              placeholder={label}
              name={name}
              required
              
          />
    </div>
  )
}

export default InputField