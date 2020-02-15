import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';

export default ( { items, xPos, offset, setTransition, transition, setOffset, setMouseDown, setMouseUp, mouseDown, mouseUp } ) => {
    
    const handleMouseDown=(e) => {
        setMouseDown(e.pageX);
    }

    const handleMouseUp=(e) => {
        setMouseUp();
    }

    const handleTransitionEnd=(value) => {
        setTransition(value)
    }

    const handleMouseMove=(e) => {
        if(mouseDown && !mouseUp && !transition ) {
            const diff = e.pageX - xPos; 
            if(Math.abs(diff) > 10 ){
                if (diff > 0 ) {
                    setOffset(300)
                } else if (diff < 0) {
                    setOffset(-300)
                }
                handleTransitionEnd(true);
            }
        } else if(mouseDown && !mouseUp && transition) {
            setMouseUp();
        }
    }
    
    return (
        <div className="CarouselContainer-Carousel" 
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTransitionEnd={e => setTransition(false)}
            style={{
                fontSize: '100px',
                transform: `translateX(${offset}px)`,
                transition: 'all 0.3s',
                transitionTimingFunction: 'ease-in-out',
            }}
        >
            <div className="CarouselContainer-Carousel-item"
                
            ></div>
            <div className="CarouselContainer-Carousel-item"
                     
            ></div>
            <div className="CarouselContainer-Carousel-item"
                     
            ></div>
            <div className="CarouselContainer-Carousel-item"
                    
            ></div>
            <div className="CarouselContainer-Carousel-item"
                    
            ></div>


            
        </div>
    );
}