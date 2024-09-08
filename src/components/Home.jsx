import React from 'react'
import Features from './Features'
import pharmacy from './pharmacy.png';
import pill from './pill.png';
import reminder from './reminder.png';

export default function Home() {
  return (
    <div className=''>
      <div className='welcome '>
        <div>
          WELCOME TO <span className='text-cyan-600  ' >MEDICISH</span>
        </div>
        <div>
          YOUR VIRTUAL PARTNER IN KEEPING YOU <span className='text-cyan-600'>HEALTHY</span>
        </div>
      </div>
      <div className='features'>  
        <Features
          name='Medication Tracking'
          description='Easily manage and track your medications with our intuitive system. Add, edit, and monitor your prescriptions all in one place.'
          img={pill}/>

        <Features
          name='Custom Reminders'
          description='Never miss a dose with personalized reminders. Set up custom alerts.'
          img={reminder} 
        />
  
        <Features
          name='Pharmacy locator'
          description='Find nearby pharmacies with ease. Use our locator tool to search for pharmacies by location and view their contact information and hours.'
          img={pharmacy}
          />
          
      </div>
      <div className='links'>
          
      </div>
    </div>
  )
}
