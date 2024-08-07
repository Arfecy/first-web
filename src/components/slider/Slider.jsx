
import { useState } from "react";
import BtnSlider from "./BtnSlider";
import "./Slider.css";
const dataSlider = [
  {
    src: "/imgs/slider/1.jpg",
    id: 1
  },
  {
    src: "/imgs/slider/2.jpg",
    id: 2
  },
  {
    src: "/imgs/slider/3.jpg",
    id: 3
  },
  {
    src: "/imgs/slider/4.jpg",
    id: 4
  }
]
const numberOfSliderItems = dataSlider.length




function Slider() {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    //ako je slideindex manji od numberofslideritems povecaj slideindex za 1 ako ne vrati slideindex na prvi index
    if (slideIndex < numberOfSliderItems) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }
  // ako je trenutni slideindex prvi slideindex prebaci slideindex na numberofslideritems(zadnji item) ako nije postavi slideindex za jedan manje
  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(numberOfSliderItems)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }


  return (
    <section className="section8" style={{ position: "relative", maxWidth: "100%", marginTop: "100px" }}>
      <img src={dataSlider[slideIndex - 1].src} style={{ position: "absolute", top: 0, left: 0, filter: "blur(4px)", minWidth: "100%", minHeight: "100%" }}></img>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
              <img width="400px" src={obj.src}></img>
            </div>
          )
        })}
        <BtnSlider moveSlide={prevSlide} />
        <BtnSlider direction="right" moveSlide={nextSlide} />

      </div>
    </section>

  )
}

export default Slider



// {dataSlider[slideIndex - 1].src}