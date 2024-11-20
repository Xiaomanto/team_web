import './middle.css';
import Card from './card';
import React, { useState } from 'react';

function Middle() {
    const names = ['語音助手','RAG'];
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (i) => {
        setActiveIndex(i);
    }
    return(
        <div className="middle">
            <div className='left'>
                {
                    names.map((name,i) => (
                            <Card 
                                key={i}
                                name={name} 
                                onClick={() => handleClick(i)}
                                style={{backgroundColor: activeIndex === i ? 'pink':''}}
                            />
                        )
                    )
                }
            </div>
            <div className='right'>
                
            </div>
        </div>
    )
}

export default Middle;