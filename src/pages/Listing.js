import React from 'react';
import { Pagination } from 'react-bootstrap';
import Selections from '../components/Body/selections/Selections.js';
import ListingsCards from '../components/ListingCards/ListingsCards.js';
import Banner from '../components/Body/Banner/Banner';
import Title from '../components/Body/Titlebar/Title';

function Listing() {
  return (
    <div>
     <Selections />
     <Title />
     <Banner />
     <ListingsCards />
     <Pagination />
    </div>
  )
}

export default Listing;


