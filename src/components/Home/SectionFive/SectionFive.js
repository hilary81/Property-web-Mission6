import React from 'react';
import "./SectionFive.css";
import Stack from '@mui/material/Stack';

const SectionFive = () => {
  return (
    <div className='SectionFiveHome'>
        <header className='Awards'>
            <h2 className='SecFiveHeading'>Awards</h2>
        </header>
    <Stack direction="row" spacing={5} className='AwardCards'>
        <img src="https://i.postimg.cc/NFFcbPZw/Group-29.png" alt="awardOne" />
        <img src="https://i.postimg.cc/fL243fyq/Group-28.png" alt="awardTwo" />
        <img src="https://i.postimg.cc/nL2g5G4V/Group-27.png" alt="awardThree" />
    </Stack>
    </div>
  )
}

export default SectionFive