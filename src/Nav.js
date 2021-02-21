function Nav() {
  return (
    <section
      className="navbar custom-navbar navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>

          {/* lOGO TEXT HERE  */}
          <a href="index.html" className="navbar-brand">
            Hydro
          </a>
        </div>

        {/* MENU LINKS  */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <a href="#home" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="smoothScroll">
                Blog
              </a>
            </li>
            <li>
              <a href="#work" className="smoothScroll">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothScroll">
                Contacts
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="section-btn">
              <a href="#" data-toggle="modal" data-target="#modal-form">
                Sign in / Join
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Nav;
