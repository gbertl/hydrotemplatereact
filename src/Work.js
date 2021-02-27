import {useEffect} from "react";

function Work() {
  useEffect(() => {
    // MAGNIFIC POPUP
    window.$(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  }, []);

  return (
    <section id="work" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Our work</h2>
              <span className="line-bar">...</span>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            {/* WORK THUMB  */}
            <div className="work-thumb">
              <a
                href={`${process.env.PUBLIC_URL}/assets/images/work-image1.jpg`}
                className="image-popup"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/work-image1.jpg`}
                  className="img-responsive"
                  alt="Work"
                />

                <div className="work-info">
                  <h3>Clean &amp; Minimal</h3>
                  <small>Product Design</small>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            {/* WORK THUMB  */}
            <div className="work-thumb">
              <a
                href={`${process.env.PUBLIC_URL}/assets/images/work-image2.jpg`}
                className="image-popup"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/work-image2.jpg`}
                  className="img-responsive"
                  alt="Work"
                />

                <div className="work-info">
                  <h3>Studio Bag</h3>
                  <small>Branding</small>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            {/* WORK THUMB  */}
            <div className="work-thumb">
              <a
                href={`${process.env.PUBLIC_URL}/assets/images/work-image3.jpg`}
                className="image-popup"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/work-image3.jpg`}
                  className="img-responsive"
                  alt="Work"
                />

                <div className="work-info">
                  <h3>Frame Design</h3>
                  <small>Photography</small>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            {/* WORK THUMB  */}
            <div className="work-thumb">
              <a
                href={`${process.env.PUBLIC_URL}/assets/images/work-image4.jpg`}
                className="image-popup"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/work-image4.jpg`}
                  className="img-responsive"
                  alt="Work"
                />

                <div className="work-info">
                  <h3>Paint Work</h3>
                  <small>Art, Design</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
