import '../App.css';
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu';
import SlideAnimation from "../components/slider/SlideAnimation";

function HomePage() {
  return (
    <>

      <HamburgerMenu />
      <section className="section1">
        <div className="wrapper">
          <div className="text">
            <h1>Building digital products & brands.</h1>
            <br />
            <p>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
              Accelerate
              critical
              development work, eliminate toil, and deploy changes with ease.
            </p>
            <div className="buttons">
              <button>About us</button>
              <button>Contact us</button>
            </div>
          </div>
          <div className="picture">
            <img src="/imgs/icon.png"
              alt="" />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="s2images">
          <div><img src="/imgs/crolla.png"
            alt="" /></div>
          <div><img src="/imgs/binance.png"
            alt="" /></div>
          <div><img src="/imgs/evga.png"
            alt="" /></div>
          <div><img src="/imgs/tesla.png"
            alt="" /></div>
        </div>

      </section>
      <section className="section3">
        <div className="smilingpic">
          <img src="/imgs/smiling.png"
            alt="" />
        </div>
        <div className="text2">
          <SlideAnimation direction="right"><h1>Work with tools you already use</h1></SlideAnimation>
          <p>We are a team of tourist specialists passionate about exceeding all expectations with all your travel needs.
          </p>
          <li>A lacus vestibulum sed arcu non</li>
          <li>Dolor magna eget est lorem ipsum</li>
          <li>Dolor sit amet consectetur</li>
          <li>Mauris pellentesque pulvinar pellentesque
          </li>
        </div>
      </section>
      <section className="section4">
        <div className="text3">
          <SlideAnimation direction="left"><h1>Work with tools you already use</h1></SlideAnimation>
          <p>We are a team of tourist specialists passionate about exceeding all expectations with all your travel needs.
          </p>
          <li>A lacus vestibulum sed arcu non</li>
          <li>Dolor magna eget est lorem ipsum </li>
          <li>Dolor sit amet consectetur</li>
          <li>Mauris pellentesque pulvinar pellentesque</li>
        </div>
        <div className="image3">
          <img src="/imgs/vrpic.jpg"
            alt="" />
        </div>
      </section>
    </>
  )
}

export default HomePage
