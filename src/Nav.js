import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

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
          <Link to="/" className="navbar-brand">
            Hydro
          </Link>
        </div>

        {/* MENU LINKS  */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#blog">
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#work">
                Our Work
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contacts
              </HashLink>
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
