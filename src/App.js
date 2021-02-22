import {useEffect} from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Modal from "./Modal";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetail from "./BlogDetail";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/assets/js/custom.js`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* PRE LOADER  */}
        <section className="preloader">
          <div className="spinner">
            <span className="spinner-rotate"></span>
          </div>
        </section>

        {/* MENU  */}
        <Nav />

        <Switch>
          <Route path="/blog-detail">
            <BlogDetail />
          </Route>

          <Route exact path="/">
            {/* HOME  */}
            <Home />

            {/* ABOUT  */}
            <About />

            {/* BLOG  */}
            <Blog />

            {/* WORK  */}
            <Work />

            {/* CONTACT  */}
            <Contact />
          </Route>
        </Switch>

        {/* FOOTER  */}
        <Footer />

        {/* MODAL  */}
        <Modal />
      </div>
    </Router>
  );
}

export default App;
