import React from 'react';
import "./SectionSeven.css";
import Stack from '@mui/material/Stack';

const SectionSeven = () => {
  return (
    <div className='SectionSevenHome'>
        <header className='RecentArticles'>
        <h2 className='SecSevenHeading'>Recent Articles</h2>
        </header>
        <Stack direction="row" spacing={4} className="articleImages">
            <img src="https://i.postimg.cc/2ywDDDdB/image-3.png" alt="articleImage" className='articleImage'/>
            <img src="https://i.postimg.cc/2yqKHNcD/image-2.png" alt="articleImage" className='articleImage'/>
            <img src="https://i.postimg.cc/NMK3nXFS/image-1.png" alt="articleImage" className='articleImage'/>
        </Stack>
        <Stack direction="row" spacing={16} className="articleTextCards">
        {/* Card One */}
        <Stack className='articleCard'>
            <p className='articleTitle'>5 Skills And Attributes Property Managers Must Have In 2022</p>
            <p className='articleText'>
            What To Look For When Searching For A Good Property Manager
            </p>
            <p2 className='articleDate'>SEPTEMBER 4, 2022</p2>
        </Stack>
        {/* Card Two */}
        <Stack className='articleCard'>
            <p className='articleTitle'>Privacy Laws – How A Good Property Manager Can Help You</p>
            <p className='articleText'>
            How Can I Make Sure I’m Complying With<br/>Privacy Laws?
            </p>
            <p2 className='articleDate'>JULY 7, 2022</p2>
        </Stack>
        {/* Card Three */}
        <Stack className='articleCard'>
            <p className='articleTitle'>Five Factors to Help You Decide If You Need a Property Manager</p>
            <p className='articleText'>
            I’ve Decided I Would Like Help; Who Can I Turn To?
            </p>
            <p2 className='articleDate'>MAY 25, 2022</p2>
        </Stack>
        </Stack>
        <div className='ViewMoreArticles'>
            <button className='btnViewMoreArticles'>View More</button>
        </div>
    </div>
  )
}

export default SectionSeven