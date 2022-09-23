import React, {useState, useEffect} from 'react';
import Title from '../components/Body/Titlebar/Title';
import Banner from "../components/Body/Banner/Banner";
import ListingCard from '../components/ListingCards/ListingCardData';
import { Container, Row } from 'react-bootstrap';
import PaginationRounded from '../components/Pagination/Pagination';
import axios from "axios";
import "../components/Body/selections/Selections.css";

const Listing = () => {
  const [query, setQuery] = useState('');
  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    const fetchdata = async () =>{
      const res = await axios.get(`http://localhost:3001?q=${query}`);
      setProperties(res.data);
    };
    if (query.length===0 || query.length >2) fetchdata();
  }, [query])
  
  return (
    <>
    <Container className="input-containers">
        <Row className='search-container'>
          <div className='search-section'>
           <div className='selection-groups'>
            <div className='search-groups'>
              <div className="search__box">
                <input 
                type="text"
                 placeholder="Search by location"
                 onChange={(e)=> setQuery (e.target.value.toLowerCase())} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
            </div>
         </div>
         <div>
          <select className='selects'  >
           <option>Property Type</option>
           <option >Apartment</option>
           <option>Condominium</option>
           <option>Banglo</option>
        </select>
        </div>
        <div>
          <select className='selects'  >
           <option>Price</option>
           <option >$400-$500</option>
           <option>$500-$600</option>
           <option>$600-$700</option>
        </select>
        </div>
        <div>
        
        <select className='selects'  >
            <option>Bed & bath</option>
           <option>3beds , 1bath</option>
           <option>2beds , 1bath</option>
           <option>1beds , 1bath</option>
        </select>
        </div>
        <div>
        <select className='selects'  >
           <option>Car parks</option>
           <option>Off road</option>
           <option>double garage</option>
           <option>No</option>
        </select>
        </div>
        <div>
          <select className='selects'  >
           <option>More</option>
           <option>Apartment</option>
           <option>Condominium</option>
           <option>Banglo</option>
        </select>
        </div>
        </div>
        </div>
    </Row> 
    </Container> 
    <Title />
    <Banner />
    <Container style={{backgroundColor:"white"}} className='Listings-group'>
          <Row className="listing-container">
        

          {properties && properties.map((property)=>{
              return(
                <ListingCard listing_id ={property.listing_id} price={property.price} deal={property.deal} address={property.address} url={property.url} ></ListingCard>
           ) })}
         </Row>
           <div  className='pagination'>
              <PaginationRounded />
          </div>
      </Container>

    </>
)
}
export default Listing;


