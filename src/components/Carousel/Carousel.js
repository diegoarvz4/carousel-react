import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';

export default (
        { 
            items, 
            xPos, 
            setTransition, 
            transition, 
            setOffset, 
            setMouseDown, 
            setMouseUp, 
            mouseDown, 
            mouseUp,
            visualConfig,
        } 
    ) => {
    
        const handleMouseDown=(e) => {
            setMouseDown(e.pageX);
        }

        const handleMouseOut=(e) => {
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
                onMouseUp={handleMouseOut}
                onMouseLeave={handleMouseOut}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTransitionEnd={() => setTransition(false)}
                style={visualConfig}
            >
                {items.map((item, idx) => (
                    <CarouselItem key={item+idx} name={item} />
                ))}            
            </div>
        );
}