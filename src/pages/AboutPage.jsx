import '../App.css';
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu';
import Slider from '../components/slider/Slider';
import TestApi from '../components/TestApi';

function AboutPage() {
  return (
    <>

      <HamburgerMenu />
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
            <img src="/imgs/avatar.png"
              alt="" />
            <h1>99.99% uptime</h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
          <div><img src="/imgs/avatar.png"
            alt="" />
            <h1>600M+ Users</h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
          <div><img src="/imgs/avatar.png"
            alt="" />
            <h1>100+ countries</h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
          <div><img src="/imgs/avatar.png"
            alt="" />
            <h1>5+ Million
            </h1>
            <p>Sample text. Click to select the Text element</p>
          </div>
        </div>
      </section>
      <section className="section6">
        <div className="middlepic"><img src="/imgs/avatar.png"
          alt="" /></div>
        <h3>We are a team of tourist specialists passionate about exceeding all expectations with all your travel needs. A
          lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.</h3>
        <h4>Alessandro Jambrečina</h4>
        <div className="middlepic" /><img src="/imgs/avatar.png"
          alt="" />
      </section>
      <Slider />
      <section>
        <TestApi />
      </section>
    </>
  )
}

export default AboutPage
