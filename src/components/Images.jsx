import React from 'react'
import reactLogo from '../assets/react.svg'


export const Images = () => {
  return (
    <div>
        <a >
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
  )
}
