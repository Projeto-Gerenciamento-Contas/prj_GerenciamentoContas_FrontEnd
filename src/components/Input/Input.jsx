import React from 'react'
import "./Input.css"
export default function Input({img, func, placeholder, type,alt, style}) {
  return (
   
    <label>
    <span className='login'>{func}</span>
    <div className='Dinput' style={style} >
    <img src={img} alt={alt} className='img_log' />
    <input type={type} name='login' className='log' placeholder={placeholder}
        />
        </div>
</label>
  )
}
