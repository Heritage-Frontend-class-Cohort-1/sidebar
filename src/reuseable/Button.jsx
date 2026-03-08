import React from 'react'

const Button = ({type="button", text, number}) => {
  return (
    
        <button type={type}
            
            number={number}>
            {text}
            
        </button>

  )
}

export default Button