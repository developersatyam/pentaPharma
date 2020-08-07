import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/products`}>Products</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/contact-us`}>Contact Us</Link>
              </li>
              {/* <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo " to={`/`}>
              {title}
            </Link>
          </div>
          <nav id="swup" className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/news`}>News</Link>
              </li>
              <li className="nav-home" role="menuitem">
                <Link to={`/careers`}>Careers</Link>
              </li>
              <li className="nav-home" role="menuitem">
                <Link to={`/announcement`}>Notifications</Link>
              </li>
              <li className="nav-home" role="menuitem">
                <Link to={`/plant-nutrition`}>Nutrition</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28589.298577432874!2d80.336417!3d26.402095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c46ec1593a39d%3A0x1ac323b11d024dcc!2sYashoda%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1595494082915!5m2!1sen!2sus"
        height="350"
        title="myFrame"
        className="kg-width-full"
        aria-hidden="false"
        tabindex="0"
      />
      <footer className="site-foot">
        <div className="footer-section">
          <p style={{ color: "black", textAlign: "left" }}>
            PENTA PHARMA PRIVATE LIMITED. <br /> 79-Govt,Industrial Estate,Rania
            Kanpur <br />
            Dehat, UttarPradesh <br /> Tel No : +919451541819 <br />
            E-mail : anil9839319336@yahoo.com
          </p>
        </div>
        &copy; {new Date().getFullYear()} {title} &mdash; Website by{" "}
        <a
          href="https://www.linkedin.com/in/satyam-singh-309a44151/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thakur Satyam
        </a>
      </footer>
    </div>
  )
}

export default Layout
