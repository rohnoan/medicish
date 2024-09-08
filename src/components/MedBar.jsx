import React from 'react'
import del from './del.png'
export default function MedBar(props) {
  return (
    <div className='med-bar ' >
      <a className='med-bar-block'>{props.name} </a>
      <a className='med-bar-block'>{props.dosage} </a>
      <a className='med-bar-block'>{props.date} </a>
      <a className='med-bar-block'>{props.time} </a>
      <button className=' w-20 h-20 border-none  '><img src={del} alt="" /></button>
    </div>
  )
}
