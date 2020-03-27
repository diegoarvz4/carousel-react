import React, { useReducer } from 'react';
import CarouselSmItem from './CarouselSmItem/CarouselSmItem';

import '../CarouselSm.scss'

const actionTypes = {
  SETXPOS: 'SETXPOS',
  SETMOUSEDOWN: 'SETMOUSEDOWN',
  SETMOUSEUP: 'SETMOUSEUP',
  SETOFFSET: 'SETOFFSET',
  SETTRANSITION: 'SETTRANSITION'
}

const mouseEventReducer = (state, action) => {
  const {
    SETXPOS,
    SETMOUSEDOWN,
    SETMOUSEUP,
    SETOFFSET,
    SETTRANSITION,
  } = actionTypes;

  switch(action.type) {
    case SETXPOS:
      return { 
        ...state, 
        xPos: action.xPos 
      };
    case SETMOUSEDOWN:
      return { 
        ...state, 
        mouseDown: action.mouseDown,
        mouseUp: action.mouseUp,
        xPos: action.xPos,
      };
    case SETMOUSEUP:
      return { 
        ...state, 
        mouseUp: action.mouseUp,
        mouseDown: action.mouseDown,
      };
    case SETOFFSET:
      return { 
        ...state, 
        offset: state.offset + action.offset 
      };
    case SETTRANSITION:
      return { 
        ...state, 
        transition: action.transition 
      };
    default:
      throw new Error('Something went wrong!')
  }
}


export default React.memo((
    { 
      items, 
      carouselTransitionSpeed, 
      carouselTransitionTimingFunction,
      carouselOffset,
      carouselItem
    }
  ) => { 
  const [carouselState, carouselDispatch] = useReducer(mouseEventReducer, {
    xPos: 0,
    mouseDown: false,
    mouseUp: true,
    offset: 0,
    transition: false
  })

  
  const {
    SETMOUSEDOWN,
    SETMOUSEUP,
    SETOFFSET,
    SETTRANSITION,
  } = actionTypes;

  const handleMouseOut = () => {
    carouselDispatch({
      type: SETMOUSEUP,
      mouseDown: false,
      mouseUp: true,
    })
  }

  const handleMouseDown = (event) => {
    carouselDispatch({
      type: SETMOUSEDOWN,
      mouseDown: true,
      mouseUp: false,
      xPos: event.pageX
    })
  }

  const handleTransitionEnd = (value) => {
    carouselDispatch({
      type: SETTRANSITION,
      transition: value,
    })
  }

  const handleMouseMove = (event) => {
    const { 
      mouseDown, 
      mouseUp, 
      transition, 
      xPos,
    } = carouselState;

    if(mouseDown && !mouseUp && !transition ) {
      const diff = event.pageX - xPos; 
      if(Math.abs(diff) > 10 ){
          if (diff > 0 ) {
              carouselDispatch({
                type: SETOFFSET,
                offset: carouselOffset,
              })
          } else if (diff < 0) {
              carouselDispatch({
                type: SETOFFSET,
                offset: -carouselOffset,
              })
          }
          handleTransitionEnd(true);
      }
    } else if(mouseDown && !mouseUp && transition) {
        carouselDispatch({
          type: SETMOUSEUP,
          mouseDown: false,
          mouseUp: true,
        })

    }
  }

  return (
    <div className="CarouselSm__Container">
      <div className="CarouselSm__Rail"
        onMouseUp={handleMouseOut}
        onMouseLeave={handleMouseOut}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTransitionEnd={() => handleTransitionEnd(false)}
        style={{
          transform: `translateX(${carouselState.offset}px)`,
          transition: `transform ${carouselTransitionSpeed}s`,
          transitionTimingFunction: carouselTransitionTimingFunction,
        }}
      >
       {
         items.map(item => {
           const properties = {...item}
           return (
             <div className="CarouselSm__Item" key={item.id}>
               {CarouselSmItem(carouselItem, properties)}
             </div>
           )
         })
       }
      </div>    
    </div>
  )
});