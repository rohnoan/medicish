import React from 'react'
import PharmacyCard from './PharmacyCard'

export default function Pharmacies() {
  return (
    <div>
      
      <div className='pharmacy-card'>
        <div className='card-main' >NAME</div>
        <div className='card-main' >DELIVERY TIME</div>
        <div className='card-main' >LOCATION</div>
      </div>
    
      <PharmacyCard 
      name='wellness forever'
      location='hiranandani estate'
      deliverytime='4 mins'
      />
      <PharmacyCard
      name='apollo'
      location='brahmand'
      deliverytime='9 mins'/>
      <PharmacyCard
      name='wellness forever'
      location='hiranandani estate'
      deliverytime='25 mins'/>
      <div className='h-[200px]'></div>
      
    </div>
  )
}
