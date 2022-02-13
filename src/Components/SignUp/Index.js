import React from "react";

function SignUp() {
  return (
    <>
      <section className="mb-5">
        <h4 className="mb-5 text-center">
          <strong>Facilis consequatur eligendi</strong>
        </h4>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                  checked
                />
                <label
                  className="form-check-label"
                  htmlFor="form2Example3"
                ></label>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
/* <div className="text-center">
<p>or sign up with:</p>
<button
  type="button"
  className="btn btn-primary btn-floating mx-1"
>
  <i className="fab fa-facebook-f"></i>
</button>

<button
  type="button"
  className="btn btn-primary btn-floating mx-1"
>
  <i className="fab fa-google"></i>
</button>

<button
  type="button"
  className="btn btn-primary btn-floating mx-1"
>
  <i className="fab fa-twitter"></i>
</button>

<button
  type="button"
  className="btn btn-primary btn-floating mx-1"
>
  <i className="fab fa-github"></i>
</button>
</div> */
