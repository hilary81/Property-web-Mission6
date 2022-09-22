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
    <div>
        <Stack direction="row" className="starStack" spacing={50.5}>
        <Checkbox {...label} className='Star' 
        icon={<img src="https://i.postimg.cc/NjJ6LNwr/Save.png" alt="Star" />} 
        checkedIcon={<img src="https://i.postimg.cc/t4M69Yh3/Save-Yellow.png" 
        alt="Favourited1" />} />
        <Checkbox {...label} className='Star2'
        icon={<img src="https://i.postimg.cc/NjJ6LNwr/Save.png" alt="Star" />} 
        checkedIcon={<img src="https://i.postimg.cc/t4M69Yh3/Save-Yellow.png" 
        alt="Favourited2" />} />
        <Checkbox {...label} className='Star3' 
        icon={<img src="https://i.postimg.cc/NjJ6LNwr/Save.png" alt="Star" />} 
        checkedIcon={<img src="https://i.postimg.cc/t4M69Yh3/Save-Yellow.png" 
        alt="Favourited3" />} />
        </Stack>
    </div>
    <Stack direction="row" spacing={10} className="FeatureListingCardAll">
        {/* Card One */}
            <Stack className='FeatureListingCardOne'>
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
        {/* Card Two */}
            <Stack className='FeatureListingCards'>
        <img src="https://i.postimg.cc/9QQ3k44V/Frame-3-2.png" alt="featureTwo" className='featureImageListing'/>
        <Stack direction="row" spacing={4} className='featureListingInfo'>
            <h5 className='featureListingPrice'>$450/week</h5>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/VLh6DH3S/Bed.png" alt="bed"></img>
            <p1 className='ListingFacAmount'>2</p1>
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
        <h4 className='ListingCaption'>Perfect for two</h4>
        </Stack>
        <Stack className='featureListingInfoAddress' direction="row" spacing={1}>
            <p1 className='featureListingAddress'>34 Kingston Street, City Centre, Auckland</p1>
            <img src="https://i.postimg.cc/tRWbjpCy/Share.png" alt="Share" style={{height: "23px", marginTop: "-20px"}}/>
        </Stack>
        </Stack>
        {/* Card Three */}
            <Stack className='FeatureListingCards'>
        <img src="https://i.postimg.cc/nrSPqr0G/Frame-3-1.png" alt="featureThree" className='featureImageListing'/>
        <Stack direction="row" spacing={4} className='featureListingInfo'>
            <h5 className='featureListingPrice'>$500/week</h5>
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
        <h4 className='ListingCaption'>Great Offer</h4>
        </Stack>
        <Stack className='featureListingInfoAddress' direction="row" spacing={1}>
            <p1 className='featureListingAddress'>70 Sale Street, City Centre,  Auckland</p1>
            <img src="https://i.postimg.cc/tRWbjpCy/Share.png" alt="Share" style={{height: "23px", marginTop: "-20px", paddingLeft: "30px"}}/>
        </Stack>
        </Stack>
    </Stack>
    <div className='AllListingsButton'>
    <button className='btnAllListings'>VIEW ALL LISTINGS</button>
    </div>
    </div>
  )
}

export default SectionThree