import React from 'react';
import "./SectionSix.css";

const SectionSix = () => {
  return (
    <div className='SectionSixHome'>
        <div className='quoteContainer'>
        </div>
        <header className='Quotes'>
            <h2 className='SecSixHeading'>Hear from our clients</h2>
        </header>
        <div className='AutoPlayQuotes'>
        <div className='fling-minislide'>
            {/* SLIDE 1 */}
            <div alt="Slide 3">
            <p className='QuoteTextSecSix'>
            I knew what I wanted. Frank knew what I wanted. 
            In one week he delivered. Frank is a down to earth guy who knows 
            the rental market inside and out. I highly recommend working with Metro NZ!
            </p>
            <img src="https://i.postimg.cc/1R8hgmY3/image.png" alt="startQuoteMarks" className="startQuoteMarksQ1" />
            <img src="https://i.postimg.cc/FF8pTNFz/image.png" alt="endQuoteMarks" className='endQuoteMarksQ1'/>
            <h3 className='QuoteAuthorSecSix'>Sue Rogers-Allen</h3>
            </div>
            {/* SLIDE 2 */}
            <div alt="Slide 2">
            <p className='QuoteTextSecSix'>
            Frank is a perfectionist in all he says and does. Frank is an excellent communicator. 
            And in my experience, he is also a high achiever. His honesty and integrity are beyond 
            question. Frank possesses and radiates many special qualities and I would have every 
            confidence in recommending him in any future endeavour.
            </p>
            <img src="https://i.postimg.cc/1R8hgmY3/image.png" alt="startQuoteMarks" className="startQuoteMarksQ2" />
            <img src="https://i.postimg.cc/FF8pTNFz/image.png" alt="endQuoteMarks" className='endQuoteMarksQ2'/>
            <h3 className='QuoteAuthorSecSix'>Henry N.</h3>
            </div>
            {/* SLIDE 3 */}
            <div alt="Slide 1">
            <p className='QuoteTextSecSix'>
            Zsuzsanna’s way of managing the details kept us confident in remaining “onlookers” rather 
            than trying to get involved. That was in stark contrast to our previous experience where 
            we felt at all times that we had to fill in the missing pieces.
            </p>
            <img src="https://i.postimg.cc/1R8hgmY3/image.png" alt="startQuoteMarks" className="startQuoteMarksQ3" />
            <img src="https://i.postimg.cc/FF8pTNFz/image.png" alt="endQuoteMarks" className='endQuoteMarksQ3'/>
            <h3 className='QuoteAuthorSecSix'>Senta and Uli</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SectionSix