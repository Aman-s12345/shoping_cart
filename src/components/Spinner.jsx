import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col items-center justify-center w-full h-[500px]">
      <div className='spinner '></div>
      </div>
      
    </div>
  )
}

export default Spinner
