import React from 'react'
import styled from 'styled-components'
import FlexDiv from '../components/common/SimpleComponents'

const ApplyBox = styled(FlexDiv)`
    display: flex;
    width: 80%;
    border-radius: 15px;
    background-color: #F3EAEA;
    border: 1px solid #D0D1D4;
    font-family: Roboto;
`

const Information = styled(FlexDiv)`
    display: flex;
    flex-direction: column;
    margin: 15px 20px;
    border: 2px solid red;
`

const PriceApply = styled(FlexDiv)`
    border: 2px solid red;
`

const PriceWeek = styled(FlexDiv)`

`
const Price = styled.div`
    font-family: Roboto;
    font-size: 25px;
    color: #A83F41;
`
const Address = styled(FlexDiv)`
  color: red;
  font-size: 12px;
  margin: 15px 0px;
`

const Property = () => {
  return (
    <div>
      {/* Buttons, Back to Listings, previous and next listing */}
      {/* Link to Lisintgs menu, call to backend for next and previous */}
      
      {/* Image slider */}
      {/* Grid with pictures from backend */}
      
      {/* Price & Apply box */}
      <ApplyBox>
        <Information>
          <h2>Unbeatable location</h2>
          <Address>14 Upper Queen Street, City Center, Auckland</Address>
          <img src='/images/House Features 01b.png' alt='Features' style={{width: 210}}></img>
        </Information>

        <PriceApply>
          <PriceWeek>
            <Price>$600</Price>
          </PriceWeek>
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
