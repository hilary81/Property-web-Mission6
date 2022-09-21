import React from 'react';
import "./SectionOne.css";
import Stack from '@mui/material/Stack';

const SectionOne = () => {
  return (
    <div className='SectionOneHome'>
    <Stack className='WelcomeCard'>
      <h1 className='WelcomeHeading'>Metro NZ Property Management</h1><br/>
      <h4 className='WelcomeText'>We are experts in the property market<br/>and keep your best interest in mind at all<br/>times</h4>
    </Stack>
    </div>
  )
}

export default SectionOne