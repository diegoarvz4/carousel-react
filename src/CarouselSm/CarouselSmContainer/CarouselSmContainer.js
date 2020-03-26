import React, { useState } from 'react';
import CarouselSmItem from './CarouselSmItem/CarouselSmItem';
import RestaurantSmItem from '../RestaurantSmItem/RestaurantSmItem';

export default ( { items } ) => { 

  const [xPos, setXPos] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseUp, setMouseUp] = useState(true);
  const [offset, setOffset] = useState(0);
  const [transition, setTransition] = useState(false);
  const [visualConfig] = useState({
    transform: `translateX(${offset}px)`,
    transition: 'all 0.3s',
    transitionTimingFunction: 'ease-in-out',
  })

  const handleMouseOut = () => {
    setMouseDown(false);
    setMouseUp(true);
  }

  const handleMouseDown = (event) => {
    setXPos(event.pageX);
    setMouseDown(true);
    setMouseUp(false);
  }

  const handleTransitionEnd = (value) => {
    setTransition(value);
  }

  const handleMouseMove = (event) => {
    if(mouseDown && !mouseUp && !transition ) {
      const diff = event.pageX - xPos; 
      if(Math.abs(diff) > 10 ){
          if (diff > 0 ) {
              setOffset(300)
          } else if (diff < 0) {
              setOffset(-300)
          }
          handleTransitionEnd(true);
      }
    } else if(mouseDown && !mouseUp && transition) {
        setMouseDown(false)
        setMouseUp(true);
    }
  }

  return (
    <div className="CarouselSm__Container">
      <div className="CarouselSm__Rail"
        onMouseUp={handleMouseOut}
        onMouseLeave={handleMouseOut}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTransitionEnd={() => setTransition(false)}
        style={visualConfig}
      >
       {
         items.map(item => {
           const properties = {...item}
           return (
             <div className="CarouselSm__Item" key={item.id}>
               {CarouselSmItem(RestaurantSmItem, properties)}
             </div>
           )
         })
       }
      </div>    
    </div>
  )
}