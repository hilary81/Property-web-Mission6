import React from 'react';
import styled from 'styled-components';
import FlexDiv from '../components/common/SimpleComponents';
import { Link } from 'react-router-dom';



const ListingButtons = styled(FlexDiv)`
  display: flex;
  justify-content: space-between;
  margin: 15px 100px;
`
const ListingBack = styled(FlexDiv)`

`
const ListingPreviousNext = styled(FlexDiv)`
  gap: 120px;
`

const PhotoSlider = styled(FlexDiv)`
  display: grid;
  column-gap: 35px;
  row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin: 0px 100px;
`

const ApplyBox = styled(FlexDiv)`
  display: flex;
  margin: 28px 100px;
  height: 200px;
  border-radius: 8px;
  background-color: #F3EAEA;
  border: 1px solid #D0D1D4;
  font-family: Roboto;
  justify-content: space-between;
`

const Information = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
`

const Title = styled.div`
  font-family: Roboto;
  font-size: 35px;
  font-weight: 700;
  color: #000000;
`

const PriceApply = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 15px 30px;
`

const PriceWeek = styled(FlexDiv)`
  gap: 10px;
  align-items: center
`
const Price = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  color: #A83F41;
`
const Address = styled(FlexDiv)`
  color: red;
  font-size: 12px;
  margin: 15px 0px;
  cursor: pointer;
`

const Property = () => {
  return (
    <div>
      {/* Buttons, Back to Listings, previous and next listing */}
      {/* Link to Lisintgs menu, call to backend for next and previous */}
      <ListingButtons>
        <ListingBack>
          <Link to='/curentlisting'>
            <img src='/images/ListingBack.PNG' alt='Back' style={{width: 200, height: 25, cursor: 'pointer'}}></img>
          </Link>
        </ListingBack>
        <ListingPreviousNext>
          <img src='/images/ListingPrevious.PNG' alt='Back' style={{width: 200, height: 25, cursor: 'pointer'}}></img>
          <img src='/images/ListingNext.PNG' alt='Back' style={{width: 170, height: 25, cursor: 'pointer', marginRight: 30}}></img>
        </ListingPreviousNext>
      </ListingButtons>


      {/* Photo sample */}
      <PhotoSlider>
        <div className='Picture 1' style={{
          gridColumnStart: 1, 
          gridColumnEnd: 5,
          gridRowStart: 1,
          gridRowEnd: 5}}>
            <img src='/images/House 01.png' alt='House 01' style={{width: 1300, borderRadius: 8, cursor: 'pointer'}}></img>
        </div>
        <div className='Picture 2'>
            <img src='/images/House 02.png' alt='House 01' style={{width: 310, borderRadius: 8, cursor: 'pointer'}}></img>
        </div>
        <div className='Picture 3'>
            <img src='/images/House 03.png' alt='House 01' style={{width: 310, borderRadius: 8, cursor: 'pointer'}}></img>
        </div>
        <div className='Picture 4'>
            <img src='/images/House 04.png' alt='House 01' style={{width: 310, borderRadius: 8, cursor: 'pointer'}}></img>
        </div>
        <div className='Picture 5'>
            <img src='/images/House 05.png' alt='House 01' style={{width: 310, borderRadius: 8, cursor: 'pointer'}}></img>
        </div>
      </PhotoSlider>

      {/* FINISHED: Price & Apply box */}
      <ApplyBox>
        <Information>
          <Title>Unbeatable location</Title>
          <Address>
            <img src='/images/map-pin.png' alt='pin' style={{height: 12, marginRight: 4}}></img>
            <div>
              14 Upper Queen Street, City Center, Auckland
            </div>
          </Address>
          <img src='/images/House Features 01b.png' alt='Features' style={{width: 210, marginTop: 15}}></img>
        </Information>

        <PriceApply>
          <PriceWeek>
            <Price>$600</Price>
            <p1 style={{color: "#919DAC"}}>/ week</p1>
          </PriceWeek>
          <button style={{
            backgroundColor: '#A83F41', 
            color: 'white', 
            border: 'none', 
            width: 160, 
            height: 60, 
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            fontFamily: 'Inter',
            cursor: 'pointer'
            }}>APPLY</button>
          <img src='/images/ShareStar Logo.png' alt='Share & Star' style={{width: 80, height: 32, cursor: 'pointer'}}></img>
        </PriceApply>

      </ApplyBox>
      {/* Bring from backend as well, design in react and copy code to db */}

      {/* Property Overview
      Data
      Features
      Nearby
      Map */}
      {/* Work on separators */}
      {/* Similar Listings */}
      {/* SearchBar */}
      
      {/* Property Agent
      Request a viewing */}
      {/* Footer */}
    </div>
  )
}

export default Property
