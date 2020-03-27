import React, { useState } from 'react';
import CarouselSmContainer from './CarouselSm/CarouselSmContainer/CarouselSmContainer';
import CarouselControls from './CarouselSm/CarouselControls/CarouselControls';

import RestaurantSmItem from './RestaurantSmItem/RestaurantSmItem';

import items from './Items/Items';

import './App.scss';

const App = () => {

  const [transitionSeped, setTransitionSpeed] = useState(0.1)
  const [transitionTimingFunction, setTransitionTimingFunction] = useState('ease-out')
  const [offset, setOffset] = useState(200)

  return (
    <div className="App">
      <h1>Carousel For Mobile</h1>
      <hr></hr>
      <CarouselControls 
        setTransitionSpeed={setTransitionSpeed}
        setTransitionTimingFunction={setTransitionTimingFunction}
        setOffset={setOffset}
      />
      <hr />
      <section className="RestaurantsCarousel">
        <CarouselSmContainer 
          items={items}
          carouselTransitionSpeed={parseFloat(transitionSeped)}
          carouselTransitionTimingFunction={transitionTimingFunction}
          carouselOffset={parseInt(offset)}
          carouselItem={RestaurantSmItem}
        />
      </section>
    </div>
    
  );
}

export default App;
