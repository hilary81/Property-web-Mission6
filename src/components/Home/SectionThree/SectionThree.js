import React from 'react';
import "./SectionThree.css";
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SectionThree = () => {
  return (
    <div className='SectionThreeHome'>
        <header className='FeatureListings'>
        <h2 className='SecThreeHeading'>Feature Listings</h2>
        </header>
    {/* Cards for the listings - Data to be pulled from backend */}
        <Stack className='FeatureListingCards'>
        <Checkbox {...label} className='FavouriteStar' icon={<img src="https://i.postimg.cc/NjJ6LNwr/Save.png" alt="Star" />} checkedIcon={<img src="https://i.postimg.cc/t4M69Yh3/Save-Yellow.png" alt="Favourtied" />} />
        <img src="https://i.postimg.cc/XNxCWLyL/Frame-4.png" alt="featureOne" className='featureImageListing'/>
        <Stack direction="row" spacing={4} className='featureListingInfo'>
            <h5 className='featureListingPrice'>$540/week</h5>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/VLh6DH3S/Bed.png" alt="bed"></img>
            <p1 className='ListingFacAmount'>1</p1>
            </Stack>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/SNtPRHPx/Bath.png" alt="bath"></img>
            <p1 className='ListingFacAmount'>1</p1>
            </Stack>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/zXLjtvdq/Car-park.png" alt="bed"></img>
            <p1 className='ListingFacAmount'>0</p1>
            </Stack>
        </Stack>
        <Stack className='featureListingInfo'>
        <h4 className='ListingCaption'>Super deal</h4>
        </Stack>
        <Stack className='featureListingInfoAddress' direction="row" spacing={1}>
            <p1 className='featureListingAddress'>147-149 Victoria Street West, City Centre,<br/>Auckland</p1>
            <img src="https://i.postimg.cc/tRWbjpCy/Share.png" alt="Share" style={{height: "23px", marginTop: "-20px"}}/>
        </Stack>
        </Stack>
    </div>
  )
}

export default SectionThree