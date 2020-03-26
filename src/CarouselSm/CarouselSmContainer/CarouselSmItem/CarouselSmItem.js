import React from 'react';

export default ( WrappedItem, properties ) => (
  <div className="CarouselSm__Item">
    <WrappedItem properties={properties} />
  </div>
)