import React from 'react';
import "./Listings.css";
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { Container } from 'react-bootstrap';
import Share from '../images/Share-black.png';
import Bed from '../images/Bed.png';
import Bath from '../images/Bath.png';
import CarPark from '../images/Vector.png';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ListingCard ({listing_id, price, deal, address, url}) {
  return (
 
        <div >        
    {/* Cards for the listings - Data to be pulled from backend */}
        <Stack  className='FeatureListingCards1'>
          <Container className ="cards-container1">
       
        <img src={url} alt={listing_id} className='featureImageListing1'/>
        <Stack direction="row" spacing={2} className='featureListingInfo1'>
            <h5 className='featureListingPrice1'>{price}</h5>
            <Stack direction="row" spacing={1} style={{marginLeft:'30px'}}>
            <img src={Bed} alt="bed"></img>
            <p1 className='ListingFacAmount1'>1</p1>
            </Stack>
            <Stack direction="row" spacing={1}>
            <img src={Bath} alt="bath" ></img>
            <p1 className='ListingFacAmount1'>1</p1>
            </Stack>
            <Stack direction="row" spacing={1}>
            <img src={CarPark} alt="bed"></img>
            <p1 className='ListingFacAmount1'>0</p1>
            </Stack>
        </Stack>
        <Stack className='featureListingInfo1'>
        <h4 className='ListingCaption1'>{deal}</h4>
        </Stack>
        <Stack className='featureListingInfoAddress1' direction="row" spacing={1}>
            <p1 className='featureListingAddress1'>{address}</p1>
            <div  className='sharing-star-icon1'>
            <img src={Share} alt="Share" />
            <Checkbox {...label} className='FavouriteStar' icon={<img src="https://i.postimg.cc/NjJ6LNwr/Save.png" alt="Star"  />} checkedIcon={<img src="https://i.postimg.cc/t4M69Yh3/Save-Yellow.png" alt="Favourtied" />} />
            </div>
        </Stack>
        </Container>
        </Stack>
       
      </div>
  )
}