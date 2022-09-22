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
const MainSection = styled(FlexDiv)`
  display: flex;
  gap: 20px;
  margin: 25px 100px;
`
  
const PropertyOverview = styled(FlexDiv)`
  border: 1px solid #D0D1D4;
  border-radius: 8px;
  width: 80%;
`
  
const AgentViewing = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: flex-start;
  align-items: center;
`
  
const PropertyAgent = styled(FlexDiv)`
  border: 1px solid #D0D1D4;
  border-radius: 8px;
  
`
  
const ViewingRequest = styled(FlexDiv)`
  border: 1px solid #D0D1D4;
  border-radius: 8px;
  
`
const Separator = ({ color }) => (
  <hr 
    style={{
      color: color, 
      backgroundColor: color,
      border: 'none',
      height: '1px', 
      margin: '25px 110px', 
    }} 
  />
)

const Property = () => {
  return (
    <div>
      
      {/* Listing Buttons */}
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

      {/* Price & Apply box */}
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

      <MainSection>
        <PropertyOverview>
          <div>
            
            <img src='/images/House 01 Property Overview.png' alt='Overview' style={{width: 750, margin: '30px 25px 10px'}}></img>
            <Separator color='#EE585A'></Separator>
            <img src='/images/House 01 Data.png' alt='Data' style={{width: 750, margin: '10px 25px'}}></img>
            <Separator color='#EE585A'></Separator>
            <img src='/images/House 01 Features.png' alt='Features' style={{width: 750, margin: '10px 25px'}}></img>
            <Separator color='#EE585A'></Separator>
            <img src='/images/House 01 Nearby.png' alt='Nearby' style={{width: 750, margin: '10px 25px'}}></img>
            <Separator color='#EE585A'></Separator>
            <img src='/images/House 01 Map.png' alt='Map' style={{width: 750, margin: '10px 25px'}}></img>
          </div>
        </PropertyOverview>

        <AgentViewing>
          <PropertyAgent>
            <img src='/images/Property Agent 01.png' alt='Agent' style={{width: 350, margin: '35px 10px'}}></img>
          </PropertyAgent>
          <ViewingRequest>
            <img src='/images/Schedule Visit.png' alt='Schedule' style={{width: 350, margin: '35px 10px'}}></img>
          </ViewingRequest>
        </AgentViewing>

      </MainSection>

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
