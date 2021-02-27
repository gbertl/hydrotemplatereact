import usePreloader from "./hooks/usePreloader";

function BlogDetail() {
  usePreloader();

  return (
    <>
      {/* BLOG HEADER */}
      <section id="blog-header" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-12">
              <h2>Do you Know What Thing Really Makes Artist Nowadays?</h2>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG DETAIL */}
      <section id="blog-detail" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10 col-sm-12">
              {/* BLOG THUMB*/}
              <div className="blog-detail-thumb">
                <div className="blog-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/blog-detail-image.jpg`}
                    className="img-responsive"
                    alt="Blog Image"
                  />
                </div>
                <h2>What makes you happy everyday?</h2>
                <p>
                  Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi
                  risus purus augue vulputate voluptate neque
                </p>

                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi, quisquam, aut, eum, natus excepturi impedit ipsa rerum
                  ratione id dolores ducimus minus eos veniam similique.
                </blockquote>

                <p>
                  Vivamus quis velit sed ante suscipit aliquam nec sed ex.
                  Maecenas porta leo at mi suscipit congue. Donec ipsum metus,
                  tristique eu leo ut, luctu Vivamus sit amet purus nec risus
                  mollis tempor.
                </p>

                <div className="blog-ads">
                  <h4>Blog Sample Advertising</h4>
                </div>

                <ul>
                  <li>
                    Brand Identity ipsum dolor eget vestibulum justo imper diet.
                  </li>
                  <li>
                    Social Marketing porta leo at mi suscipit congue. Donec
                    ipsum metus, tristique leo luctus.
                  </li>
                  <li>
                    Wordpress Themes augue vulputate voluptate neque, curabitur
                    dolor vitae massa.
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa.
                </p>
                <div className="blog-social-share">
                  <h4>Share this article</h4>
                  <a
                    href="https://www.facebook.com/templatemo"
                    className="btn btn-primary"
                  >
                    <i className="fa fa-facebook"></i>facebook
                  </a>
                  <a href="#" className="btn btn-success">
                    <i className="fa fa-twitter"></i>twitter
                  </a>
                  <a href="#" className="btn btn-danger">
                    <i className="fa fa-google-plus"></i>google plus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
