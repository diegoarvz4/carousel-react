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
        if(mouseDown && !mouseUp) {

            const diff = e.pageX - xPos; 

            if(Math.abs(diff) > 20 && !transition ){
             
                if (diff > 0 ) {
                    setOffset(100)
                } else if (diff < 0) {
                    setOffset(-100)
                }
                handleTransitionEnd(true);
            }
            
            
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
                transition: 'all 0.2s',
            }}
        >
            { items.map( (item, idx) => (
                <CarouselItem key={idx} name={ item }/>
            ))}
            
        </div>
    );
}