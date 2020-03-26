import React from 'react';


const CarouselControl = (props) => {

  return (
    <div className="CarouselControls">
      <label htmlFor="ts">Tranisiton Speed</label>
      <input type="number" name="ts" step="0.1" defaultValue='0.1' value={props.transitionSeped} onChange={(e) => {
        props.setTransitionSpeed(e.target.value)
      }}/>
      <label htmlFor="tts">Tranisiton Timing Function</label>
      <input type="text" name="tts" defaultValue='ease-out' value={props.transitionTimingFunction} onChange={(e) => {
        props.setTransitionTimingFunction(e.target.value)
      }}/>
      <label htmlFor="dist">Distance in px</label>
      <input type="number" name="dist" defaultValue={props.offset} value={props.offset} onChange={(e) => {
        props.setOffset(e.target.value)
      }}/>
    </div>
    
  );
}

export default CarouselControl;
