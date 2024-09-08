import React from 'react'

export default function PharmacyCard(props) {
  return (
    <div className='pharmacy-card'>
      <div className='cards' >{props.name}</div>
      <div className='cards' >{props.deliverytime}</div>
      <div className='cards' >{props.location}</div>
    
    </div>
  )
}
