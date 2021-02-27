import {Link} from "react-router-dom";

function Blog() {
  return (
    <section id="blog" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Our Blog</h2>
              <span className="line-bar">...</span>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            {/* BLOG THUMB  */}
            <div className="media blog-thumb">
              <div className="media-object media-left">
                <Link to="/blog-detail">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/blog-image1.jpg`}
                    className="img-responsive"
                    alt=""
                  />
                </Link>
              </div>
              <div className="media-body blog-info">
                <small>
                  <i className="fa fa-clock-o"></i> December 22, 2017
                </small>
                <h3>
                  <Link to="/blog-detail">
                    How To Find Out Beautiful Workspace.
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
                </p>
                <Link to="/blog-detail" className="btn section-btn">
                  Read article
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            {/* BLOG THUMB  */}
            <div className="media blog-thumb">
              <div className="media-object media-left">
                <Link to="/blog-detail">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/blog-image2.jpg`}
                    className="img-responsive"
                    alt=""
                  />
                </Link>
              </div>
              <div className="media-body blog-info">
                <small>
                  <i className="fa fa-clock-o"></i> December 18, 2017
                </small>
                <h3>
                  <Link to="/blog-detail">woman sportwear.</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
                </p>
                <Link to="/blog-detail" className="btn section-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            {/* BLOG THUMB  */}
            <div className="media blog-thumb">
              <div className="media-object media-left">
                <Link to="/blog-detail">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/blog-image3.jpg`}
                    className="img-responsive"
                    alt=""
                  />
                </Link>
              </div>
              <div className="media-body blog-info">
                <small>
                  <i className="fa fa-clock-o"></i> December 14, 2017
                </small>
                <h3>
                  <Link to="/blog-detail">new creative fashion.</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
                </p>
                <Link to="/blog-detail" className="btn section-btn">
                  Read article
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            {/* BLOG THUMB  */}
            <div className="media blog-thumb">
              <div className="media-object media-left">
                <Link to="/blog-detail">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/blog-image4.jpg`}
                    className="img-responsive"
                    alt=""
                  />
                </Link>
              </div>
              <div className="media-body blog-info">
                <small>
                  <i className="fa fa-clock-o"></i> December 10, 2017
                </small>
                <h3>
                  <Link to="/blog-detail">
                    minimalist design trend in 2018.
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
                </p>
                <Link to="/blog-detail" className="btn section-btn">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
