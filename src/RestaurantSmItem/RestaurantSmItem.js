import React from 'react';
import './RestaurantSmItem.scss';

import restaurantIcon from '../assets/icons/icon-restaurant.svg';
import barIcon from '../assets/icons/icon-bar.svg'
import starIcon from '../assets/icons/icon-estrella.svg';
import medalIcon from '../assets/icons/icon-medalla.svg';

export default React.memo( props => 
  {
    const {
      img, 
      title, 
      price, 
      category, 
      rank,
      reviews,
    } = props;

    return (
      <div className='RestaurantItem'>
        <img src={img} alt={title} className='RestaurantItem__IMG' draggable="false" />
        
        <div className='RestaurantItem__Description'>
          <h2>{title}</h2>
          <span className="RestaurantItem__Description__Price">
            {`Precio promedio: ${price} mxn / persona`}
          </span>
          <div className="RestaurantItem__Description__Category">
            <img src={restaurantIcon} alt="Restaurant" />
            <span>{category}</span>
          </div>
        </div>

        <div className='RestaurantItem__Stats'>
          <div className='RestaurantItem__Stats__RankAndReviews'>
            <img src={starIcon} alt='' className='' />
            <p><span className="bold">{rank}</span>{`(${reviews})`}</p>
          </div>
          <div className='RestaurantItem__Stats__Grade'>
            <div className='RestaurantItem__Stats__Grade__Level'>
              <img src={medalIcon} alt="" />
              <p className="luxury">{'Super'}</p>
            </div>
            <p className='RestaurantItem__Stats__Grade__Class'>
              { 'Luxury' }
            </p>
          </div>
        </div>

      </div>
    )
  } 
);