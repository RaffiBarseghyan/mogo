import style from "./service.module.scss";
import service from "../../Assets/Images/service.png";
import PICTURE from "../../Assets/Images/PICTURE.png";
import EQUALIZER from "../../Assets/Images/EQUALIZER.png";
import BULLSEYE from "../../Assets/Images/BULLSEYE.png";
import serviceFooter from "../../Assets/Images/serviceFooter.png";

function Service() {
  return (
    <>
      <div className={`${style.Service}`}>
        <h3>Service</h3>
        <h2>what we do</h2>
        <div className={style.line}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim <br />
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          <img src={service} alt="" className="me-4 ms-4" />
          <div className={style.acordeon}>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img src={PICTURE} alt="" className="me-3" />
                    Photography
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body ${style.acordeonBody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis <br />
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat <br />
                    nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui <br />
                    officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <img src={EQUALIZER} alt="" className="me-3" />
                    creativity
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body ${style.acordeonBody}`}>
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img src={BULLSEYE} alt="" className="me-3" />
                    web design
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body ${style.acordeonBody}`}>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.serviceFooter}>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <div></div>
              <div>
                <img src={serviceFooter} alt="" />
              </div>
              <div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br />
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, <br />
                  quis nostrud exercitation.”
                </p>
                <div className="d-flex align-items-center">
                  <div className={style.line}></div>
                  <h2>Jon Doe</h2>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {" "}
              <div>
                <img src={serviceFooter} alt="" />
              </div>
              <div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br />
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, <br />
                  quis nostrud exercitation.”
                </p>
                <div className="d-flex align-items-center">
                  <div className={style.line}></div>
                  <h2>Jon Doe</h2>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {" "}
              <div>
                <img src={serviceFooter} alt="" />
              </div>
              <div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br />
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, <br />
                  quis nostrud exercitation.”
                </p>
                <div className="d-flex align-items-center">
                  <div className={style.line}></div>
                  <h2>Jon Doe</h2>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Service;
