import React from 'react'
import "./Input.css"
export default function Input({img, func, placeholder, type,alt}) {
  return (
   
    <label>
    <span className='login'>{func}</span>
    <div className='Dinput'>
    <img src={img} alt={alt} className='img_log' />
    <input type={type} name='login' id='login' placeholder={placeholder}
        />
        </div>
</label>
  )
}
