import React from 'react';
import "./SectionFour.css";
import Stack from '@mui/material/Stack';

const SectionFour = () => {
  return (
    <div className='SectionFourHome'>
        <header className='OurServices'>
        <h2 className='SecFourHeading'>Our Services</h2>
        </header>
        <Stack direction="row" className='ourServicesCards'>
        {/* Service One */}
        <Stack className='serviceTypes'>
            <img src="https://i.postimg.cc/Yq338WXx/Vector-8.png" alt="serviceOne" className='serviceIcons'/>
            <h3 className='serviceTypeHeading'>Property Management Service and Appraisals</h3>
            <p className='serviceTypeText'>
                We conduct a thorough appraisal of your property based on the current rent 
                market to ensure  you’re getting the most out of your property, especially 
                if it is an investment property.
            </p>
        </Stack>
                {/* Service Two */}
                <Stack className='serviceTypes'>
            <img src="https://i.postimg.cc/Kcd4KGtr/Frame-811492.png" alt="serviceOne" className='serviceIcons'/>
            <h3 className='serviceTypeHeadingTwo'>Our Property Listings</h3>
            <p className='serviceTypeText'>
            The properties that we manage have to comply with New Zealand standards and are in good condition. 
            We help you along the whole process and management of any additional fees that may pop up
            </p>
        </Stack>
                {/* Service Three */}
                <Stack className='serviceTypes'>
            <img src="https://i.postimg.cc/W3VcRyZZ/Group.png" alt="serviceOne" className='serviceIcons'/>
            <h3 className='serviceTypeHeadingThree'>"The Antipodean" Luxury Apartments</h3>
            <p className='serviceTypeText'>
            We have a stringent tenant selection process. Our approach leaves no room for compromise. 
            Our appraisals are obligation-free and ensure that you get the best returns.
            </p>
        </Stack>
        </Stack>
    </div>
  )
}

export default SectionFour