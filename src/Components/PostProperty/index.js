import * as React from "react";

function PostProperty() {
  return (
    <div>
      <div className="image-container set-full-height">
        <a href="http://creative-tim.com">
          <div className="logo-container">
            <div className="logo">
              <img src="./assets/img/new_logo.png" alt="/" />
            </div>
            <div className="brand">Creative Tim</div>
          </div>
        </a>

        <a
          href="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard"
          className="made-with-mk"
        >
          <div className="brand">MK</div>
          <div className="made-with">
            Made with <strong>Material Kit</strong>
          </div>
        </a>

        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="wizard-container">
                <div className="card wizard-card" data-color="red" id="wizard">
                  <form action="" method="">
                    <div className="wizard-header">
                      <h3 className="wizard-title">Book a Room</h3>
                      <h5>This information will let us know more about you.</h5>
                    </div>
                    <div className="wizard-navigation">
                      <ul>
                        <li>
                          <a href="#details" data-toggle="tab">
                            Account
                          </a>
                        </li>
                        <li>
                          <a href="#captain" data-toggle="tab">
                            Room Type
                          </a>
                        </li>
                        <li>
                          <a href="#description" data-toggle="tab">
                            Extra Details
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content">
                      <div className="tab-pane" id="details">
                        <div className="row">
                          <div className="col-sm-12">
                            <h4 className="info-text">
                              {" "}
                              Let's start with the basic details.
                            </h4>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="material-icons">email</i>
                              </span>
                              <div className="form-group label-floating">
                                <label className="control-label">
                                  Your Email
                                </label>
                                <input
                                  name="name"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="material-icons">lock_outline</i>
                              </span>
                              <div className="form-group label-floating">
                                <label className="control-label">
                                  Your Password
                                </label>
                                <input
                                  name="name2"
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group label-floating">
                              <label className="control-label">Country</label>
                              <select className="form-control">
                                <option disabled="" selected=""></option>
                                <option value="Afghanistan">
                                  {" "}
                                  Afghanistan{" "}
                                </option>
                                <option value="Albania"> Albania </option>
                                <option value="Algeria"> Algeria </option>
                                <option value="American Samoa">
                                  {" "}
                                  American Samoa{" "}
                                </option>
                                <option value="Andorra"> Andorra </option>
                                <option value="Angola"> Angola </option>
                                <option value="Anguilla"> Anguilla </option>
                                <option value="Antarctica"> Antarctica </option>
                                <option value="...">...</option>
                              </select>
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                Daily Budget
                              </label>
                              <select className="form-control">
                                <option disabled="" selected=""></option>
                                <option value="Afghanistan"> $100 </option>
                                <option value="Albania"> $100 - $499 </option>
                                <option value="Algeria"> $499 - $999 </option>
                                <option value="American Samoa"> $999+ </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="captain">
                        <h4 className="info-text">
                          What type of room would you want?{" "}
                        </h4>
                        <div className="row">
                          <div className="col-sm-10 col-sm-offset-1">
                            <div className="col-sm-4">
                              <div
                                className="choice"
                                data-toggle="wizard-radio"
                                rel="tooltip"
                                title="This is good if you travel alone."
                              >
                                <input type="radio" name="job" value="Design" />
                                <div className="icon">
                                  <i className="material-icons">weekend</i>
                                </div>
                                <h6>Single</h6>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div
                                className="choice"
                                data-toggle="wizard-radio"
                                rel="tooltip"
                                title="Select this room if you're traveling with your family."
                              >
                                <input type="radio" name="job" value="Code" />
                                <div className="icon">
                                  <i className="material-icons">home</i>
                                </div>
                                <h6>Family</h6>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div
                                className="choice"
                                data-toggle="wizard-radio"
                                rel="tooltip"
                                title="Select this option if you are coming with your team."
                              >
                                <input type="radio" name="job" value="Code" />
                                <div className="icon">
                                  <i className="material-icons">business</i>
                                </div>
                                <h6>Business</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="description">
                        <div className="row">
                          <h4 className="info-text">
                            {" "}
                            Drop us a small description.
                          </h4>
                          <div className="col-sm-6 col-sm-offset-1">
                            <div className="form-group">
                              <label>Room description</label>
                              <textarea
                                className="form-control"
                                placeholder=""
                                rows="6"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="control-label">Example</label>
                              <p className="description">
                                "The room really nice name is recognized as
                                being a really awesome room. We use it every
                                sunday when we go fishing and we catch a lot. It
                                has some kind of magic shield around it."
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wizard-footer">
                      <div className="pull-right">
                        <input
                          type="button"
                          className="btn btn-next btn-fill btn-danger btn-wd"
                          name="next"
                          value="Next"
                        />
                        <input
                          type="button"
                          className="btn btn-finish btn-fill btn-danger btn-wd"
                          name="finish"
                          value="Finish"
                        />
                      </div>
                      <div className="pull-left">
                        <input
                          type="button"
                          className="btn btn-previous btn-fill btn-default btn-wd"
                          name="previous"
                          value="Previous"
                        />

                        <div className="footer-checkbox">
                          <div className="col-sm-12">
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="optionsCheckboxes"
                                />
                              </label>
                              Subscribe to our newsletter
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container text-center">
            Made with <i className="fa fa-heart heart"></i> by{" "}
            <a href="http://www.creative-tim.com">Creative Tim</a>. Free
            download{" "}
            <a href="http://www.creative-tim.com/product/material-bootstrap-wizard">
              here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostProperty;
