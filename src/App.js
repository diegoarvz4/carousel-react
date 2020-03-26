import React from 'react';

import CarouselContainer from './containers/CarouselContainer/CarouselContainer';
import CarouselSmContainer from './CarouselSm/CarouselSmContainer/CarouselSmContainer';

import ElConventoIMG from './assets/img/El-Convento.jpg';
import LaPostaIMG from './assets/img/La-Posta.jpg';
import MoshiMoshiIMG from './assets/img/Moshi-Moshi.jpg';
import SonoraGrillIMG from './assets/img/Sonora-Grill.jpg';

import './App.scss';

function App() {

  const items = [
    {
      id: 1,
      img: ElConventoIMG, 
      title: 'El Convento', 
      price: 400, 
      category: 'Mexicana', 
      rank: 4.5,
      reviews: 60,
    },
    {
      id: 2,
      img: LaPostaIMG, 
      title: 'La Posta Coyoacán', 
      price: 500, 
      category: 'Italiana, Mediterránea', 
      rank: 4.5,
      reviews: 100,
    }, 
    {
      id: 3,
      img: SonoraGrillIMG, 
      title: 'Sonora Grill Coyoacán', 
      price: 350, 
      category: 'Grill Mexicana', 
      rank: 4.5,
      reviews: 33,
    }, 
    {
      id: 4,
      img: MoshiMoshiIMG, 
      title: 'Moshi Moshi Oasis', 
      price: 160, 
      category: 'Japonesa, Sushi, Mex', 
      rank: 4.8,
      reviews: 15,
    },  

  ]

  return (
    <div className="App">
      {/*<CarouselContainer />*/}
      <section className="RestaurantsCarousel">
        <CarouselSmContainer items={items}/>
      </section>
    </div>
    
  );
}

export default App;
