//features is child
//home is parent
import React from 'react'
import pharmacy from './pharmacy.png';
import pill from './pill.png';
import reminder from './reminder.png';

export default function Features(props) {
  return (
    <div >

      <> </>
      <a>{props.name}</a>
      <p className='text-black text-xl'>
        {props.description}</p>
      <img className='features-image' src={(props.img)} alt="" />
    </div>
  )
}
