import React from 'react';

import possibility from '../../assets/possibility.png'
import './possibility.css';


const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className="gpt3__possibility-img">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid nulla cum dolore officia quasi error tempore similique repellat animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor!</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
}

export default Possibility