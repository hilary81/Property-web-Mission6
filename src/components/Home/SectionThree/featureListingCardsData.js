import React from 'react';
import Stack from '@mui/material/Stack';

export default function FeatureListingCardData ({listing_id, price, deal, address, url, bed, bath, carpark}) {
    return (
   
          <div>
         
      <Stack className='FeatureListingCardOne'>
        <img src={url} alt="featureOne" className='featureImageListing'/>
        <Stack direction="row" spacing={4} className='featureListingInfo'>
            <h5 className='featureListingPrice'>{price}</h5>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/VLh6DH3S/Bed.png" alt="bed"></img>
            <p1 className='ListingFacAmount'>{bed}</p1>
            </Stack>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/SNtPRHPx/Bath.png" alt="bath"></img>
            <p1 className='ListingFacAmount'>{bath}</p1>
            </Stack>
            <Stack direction="row" spacing={1}>
            <img src="https://i.postimg.cc/zXLjtvdq/Car-park.png" alt="carpark"></img>
            <p1 className='ListingFacAmount'>{carpark}</p1>
            </Stack>
        </Stack>
        <Stack className='featureListingInfo'>
        <h4 className='ListingCaption'>{deal}</h4>
        </Stack>
        <Stack className='featureListingInfoAddress' direction="row" spacing={1}>
            <p1 className='featureListingAddress'>{address}</p1>
            <img src="https://i.postimg.cc/tRWbjpCy/Share.png" alt="Share" style={{height: "23px", marginTop: "-20px"}}/>
        </Stack>
        </Stack>
         
        </div>
    )
  }