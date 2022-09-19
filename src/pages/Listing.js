import React from 'react'
import styled from 'styled-components'
import FlexDiv from '../components/common/SimpleComponents'

const ApplyBox = styled(FlexDiv)`
    display: flex;
    width: 80%;
`

const Information = styled(FlexDiv)`
    
`

const PriceApply = styled(FlexDiv)`

`

const Address = styled(FlexDiv)`
  color: red;
  font-size: 12px;
`

function Listing() {
  return (
    <div>
      Listing
      {/* Buttons, Back to Listings, previous and next listing */}
      {/* Link to Lisintgs menu, call to backend for next and previous */}
      
      {/* Image slider */}
      {/* Grid with pictures from backend */}
      
      {/* Price & Apply box */}
      <ApplyBox>
        <Information>
          <h2>Unbeatable location</h2>
          <Address>14 Upper Queen Street, City Center, Auckland</Address>
          {/* Logos */}
        </Information>

        <PriceApply>

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

export default Listing
