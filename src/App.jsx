import './App.css';
import HamburgerMenu from './HamburgerMenu';
import SlideAnimation from "./SlideAnimation";
import Slider from './Slider';

function App() {
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
            <img src="images/icon.png"
              alt="" />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="s2images">
          <div><img src="images/crolla.png"
            alt="" /></div>
          <div><img src="images/binance.png"
            alt="" /></div>
          <div><img src="images/evga.png"
            alt="" /></div>
          <div><img src="images/tesla.png"
            alt="" /></div>
        </div>

      </section>
      <section className="section3">
        <div className="smilingpic">
          <img src="images/smiling.png"
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
          <img src="images/vrpic.jpg"
            alt="" />
        </div>
      </section>
      <section className="section5">

        <div className="text4">
          <h1>Trusted by over 600 million users and 10,000 teams</h1>
          <p>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect
            you
            and your customers.</p>
          <button>About us</button>
        </div>
        <div className="grid">
          <div>
            <img src="images/avatar.png"
              alt="" />
            <h1>99.99% uptime</h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
          <div><img src="images/avatar.png"
            alt="" />
            <h1>600M+ Users</h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
          <div><img src="images/avatar.png"
            alt="" />
            <h1>100+ countries</h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
          <div><img src="images/avatar.png"
            alt="" />
            <h1>5+ Million
            </h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
        </div>
      </section>
      <section className="section6">
        <div className="middlepic"><img src="images/avatar.png"
          alt="" /></div>
        <h3>We are a team of tourist specialists passionate about exceeding all expectations with all your travel needs. A
          lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.</h3>
        <h4>Alessandro Jambrečina</h4>
        <div className="middlepic" /><img src="images/avatar.png"
          alt="" />
      </section>
      <section className="section7">
        <h2>Designed for business teams like yours</h2>
        <div className="pricing">
          <div className="option">
            <h5>UX/UI design</h5>
            <p>Acquire mastery in leading platforms and deep understanding so you can adapt to new ones.</p>
            <h6>$ 250</h6>
            <a href="#">Read more</a>
          </div>
          <div className="option">
            <h5>HTML & CSS</h5>
            <p>Acquire mastery in leading platforms and deep understanding so you can adapt to new ones.</p>
            <h6>$ 350</h6>
            <a href="#">Read more</a>
          </div>
          <div className="option">
            <h5>Product management</h5>
            <p>Acquire mastery in leading platforms and deep understanding so you can adapt to new ones.</p>
            <h6>$450</h6>
            <a href="#">Read more</a>
          </div>
        </div>
      </section>
      <Slider />
      <section className="section9">
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
          <img src="images/iconbusiness.png"
            alt="" />
        </SlideAnimation>
      </section>
    </>
  )
}

export default App
