import React from 'react';
import CarouselSmContainer from './CarouselSm/CarouselSmContainer/CarouselSmContainer';

import items from './Items/Items';

import './App.scss';

const App = () => {

  const carouselConfig = {
    transitionSpeed: 0.1,
    transitionTimingFunction: 'ease-out',
    offset: 200
  }

  return (
    <div className="App">
      <section className="RestaurantsCarousel">
        <CarouselSmContainer 
          items={items}
          carouselTransitionSpeed={carouselConfig.transitionSpeed}
          carouselTransitionTimingFunction={carouselConfig.transitionTimingFunction}
          carouselOffset={carouselConfig.offset}
        />
      </section>
    </div>
    
  );
}

export default App;
