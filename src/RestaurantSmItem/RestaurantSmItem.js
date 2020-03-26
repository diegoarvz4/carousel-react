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
        <img src={img} alt={title} className='RestaurantItem__IMG' />
        <div className="d-flex justify-content-between">
            <div className="restaurants__info">
                <p className="text-truncate restaurants__name">{title}</p>
                <p className="restaurants__price">
                  {`Precio promedio: ${price} mxn / persona`}
                </p>
                <div className="d-flex restaurants__details mt-1">
                    <div className="d-flex align-items-center">
                        <img src={restaurantIcon} alt="Restaurant" />
                        <p className="pl-1">{category}</p>
                    </div>
                    <div className="d-flex align-items-center restaurantes__item--detalles ml-2">
                        <img src={barIcon} alt="" />
                        <p className="pl-1">Bar</p>
                    </div>
                </div>
            </div>
            <div className="restaurants__rating">
                <div className="d-flex justify-content-end">
                    <img src={starIcon} alt="" className="pr-1" />
                    <p><span className="bold">{rank}</span> {`(${reviews})`}</p>
                </div>
                <div className="d-flex justify-content-end">
                    <img src={medalIcon} alt="" />
                    <p className="luxury">Super</p>
                </div>
                <div className="d-flex justify-content-end">
                    <p className="luxury">luxury</p>
                </div>
            </div>
        </div>
      </div>
    )
  } 
);