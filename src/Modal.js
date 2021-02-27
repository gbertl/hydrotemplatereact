function Modal() {
  return (
    <section
      className="modal fade"
      id="modal-form"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content modal-popup">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="modal-title">
                    <h2>Hydro Co</h2>
                  </div>

                  {/* NAV TABS  */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="active">
                      <a
                        href="#sign_up"
                        aria-controls="sign_up"
                        role="tab"
                        data-toggle="tab"
                      >
                        Create an account
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sign_in"
                        aria-controls="sign_in"
                        role="tab"
                        data-toggle="tab"
                      >
                        Sign In
                      </a>
                    </li>
                  </ul>

                  {/* TAB PANES  */}
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="sign_up"
                    >
                      <form action="#" method="post">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required
                        />
                        <input
                          type="telephone"
                          className="form-control"
                          name="telephone"
                          placeholder="Telephone"
                          required
                        />
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          required
                        />
                        <input
                          type="submit"
                          className="form-control"
                          name="submit"
                          value="Submit Button"
                        />
                      </form>
                    </div>

                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="sign_in"
                    >
                      <form action="#" method="post">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          required
                        />
                        <input
                          type="submit"
                          className="form-control"
                          name="submit"
                          value="Submit Button"
                        />
                        <a href="https://www.facebook.com/templatemo">
                          Forgot your password?
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
