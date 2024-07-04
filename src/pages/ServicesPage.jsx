import '../App.css';
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu';



function ServicesPage() {
  return (
    <>
      <HamburgerMenu />
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
    </>
  )
}


export default ServicesPage