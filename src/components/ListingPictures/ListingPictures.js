import React from 'react';
import {useState,useEffect} from 'react';
import ManagementBody from '../ManagementBody/ManagementBody'

const ListingsPictures = () => {
  const [pictures, setPictures] = useState(null);

  useEffect(()=>{
     fetch("http://localhost:3002/propertymanagement")
     .then((res)=> res.json())
     .then((pictures)=> setPictures(pictures))
  
 // eslint-disable-next-line
  }, ['']);
  console.log(pictures)
 
  return (
    <div>
    {pictures => {
        return(
            <ManagementBody 
                listingBack={pictures.listingBack}
                listingPrevious={pictures.listingPrevious}
                listingNext={pictures.listingNext}
                pic1={pictures.pic1} 
                pic2={pictures.pic2}
                pic3={pictures.pic3}
                pic4={pictures.pic4}
                pic5={pictures.pic5}
                propOverview={pictures.propOverview}
                propData={pictures.propData}
                propFeatures={pictures.propFeatures}
                propNearby={pictures.propNearby}
                propMap={pictures.propMap}
                agent={pictures.agent}
                schedule={pictures.schedule}
            ></ManagementBody>
        )
    }}          
    </div>
  )
}

export default ListingsPictures;
