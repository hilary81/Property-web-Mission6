import React from 'react';
import PropertyPic from '../images/property.png';
import { Container, Row, Col } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import './Banner.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Banner = () => {
  return (
    <Container className="banner-containers">
        <Row className='columns-group'>
            <Col className='col-1'>
            <img src={PropertyPic} alt="property" className='banner-img'/>           
             </Col>
            <Col className='col-2'>
                  <img src="https://i.postimg.cc/XNxCWLyL/Frame-4.png"  alt="featureOne" className='featureImageListing-2'/>
            </Col>
            <Col className='col-3'>
              <Stack className='featureListingInfo-2'>
                 <h4 className='ListingCaption-2'>Super deal</h4>
              </Stack>

              <Stack className='featureListingInfoAddress-2'            direction="row" spacing={1}>    
                 <p  className='featureListingAddress-2'>147-149 Victoria Street West, City Centre,<br/>Auckland</p>
                 
              </Stack>
              <Stack direction="row" className='featureListingInfo-2'>
                 <h5 className='featureListingPrice-2'>$540/week</h5>
            </Stack>
            <Stack direction="row" className="icons">
            <Stack direction="row" spacing={1}>
                 <img src="https://i.postimg.cc/VLh6DH3S/Bed.png" alt="bed" className='fac-icon'></img>
                  <p className='ListingFacAmount-2'>1</p>
            </Stack>
            <Stack direction="row" spacing={1}>
                <img src="https://i.postimg.cc/SNtPRHPx/Bath.png" alt="bath" className='fac-icon' ></img>
                <p className='ListingFacAmount-2'>1</p>
            </Stack>
            <Stack direction="row" spacing={1}>
                <img src="https://i.postimg.cc/zXLjtvdq/Car-park.png" alt="bed" className='fac-icon'></img>
               <p className='ListingFacAmount-2'>0</p>
            </Stack>
            <Stack direction="row" className="star-share-icon" >
                  <img src="https://i.postimg.cc/tRWbjpCy/Share.png" alt="Share" className="share-icon"/>
                  <Checkbox {...label} className='FavouriteStar' icon={<img src="https://i.postimg.cc/NjJ6LNwr/Save.png" alt="Star" className='star-icon' />} checkedIcon={<img src="https://i.postimg.cc/t4M69Yh3/Save-Yellow.png" alt="Favourtied" className='share-img' />} />
            </Stack>
            </Stack>
       
      
        
            </Col>
        </Row>
    </Container>
  )
}

export default Banner
