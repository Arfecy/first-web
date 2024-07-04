import React from 'react'
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu'
import SlideAnimation from '../components/slider/SlideAnimation'


const ContactPage = () => {
  return (
    <>
      <HamburgerMenu />
      <section className="section9" style={{ marginTop: "100px" }}>
        <SlideAnimation direction="left">
          <div>
            <h2>Contact us</h2>
            <p>We are here to meet any business need and to promote your company online!</p>
            <h5>
              <span>Phone:</span>
              <a href="#">12345678</a>
              <br />
              <span>Location: Ivana Mažuranica 521516</span>
              <br />
              <span>Mail:</span>
              <a href="#">alessandro0223@gmail.com</a>
            </h5>
          </div>
        </SlideAnimation>
        <SlideAnimation direction="right">
          <img src="/imgs/iconbusiness.png"
            alt="" />
        </SlideAnimation>
      </section>
    </>
  )
}

export default ContactPage