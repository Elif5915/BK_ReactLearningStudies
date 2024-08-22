import React from 'react'

const Button = ({onClick, btntext}) => {
  return (
    <div>
      <button className='w-full h-10 bg-indigo-600 text-white flex justify-center mt-2 rounded-md border-transparent items-center cursor-pointer' onClick={onClick}>{btntext}</button>
    </div>
  )
}

export default Button
