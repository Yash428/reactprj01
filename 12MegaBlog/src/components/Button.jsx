import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = ''
}) {
  return (
    <div>{children}</div>
  )
}

export default Button