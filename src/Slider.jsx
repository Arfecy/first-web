
import { useState } from "react";
import BtnSlider from "./BtnSlider";
import "./Slider.css";
const dataSlider = [
  {
    src: "/public/images/slider/1.jpg",
    id: 1
  },
  {
    src: "/public/images/slider/2.jpg",
    id: 2
  },
  {
    src: "/public/images/slider/3.jpg",
    id: 3
  },
  {
    src: "/public/images/slider/4.jpg",
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
    <section className="section8" style={{ position: "relative", maxWidth: "100%" }}>
      <img src={dataSlider[slideIndex - 1].src} style={{ position: "absolute", top: 0, left: 0, filter: "blur(4px)", width: "100%" }}></img>
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