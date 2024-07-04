import React from 'react'
import LeftArrow from '../LeftArrow'
import RightArrow from '../RightArrow'
import './Slider.css'


// eslint-disable-next-line react/prop-types
function BtnSlider({ direction = "left", moveSlide }) {
  return (
    <button className={`btn-slide ${direction === "left" ? "prev" : "next"}`} onClick={moveSlide}>
      {direction === "left" ? <LeftArrow /> : <RightArrow />}
    </button>
  )
}

export default BtnSlider