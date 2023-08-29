import style from "./happyClients.module.scss";
import HappyClientsImg1 from "../../Assets/Images/HappyClientsImg1.png";
import HappyClientsImg2 from "../../Assets/Images/HappyClientsImg2.png";
import HappyClientsImg3 from "../../Assets/Images/HappyClientsImg3.png";
import HappyClientsImg4 from "../../Assets/Images/HappyClientsImg4.png";

function HappyClients() {
  return (
    <>
      <div className={`${style.HappyClients} `}>
        <div className={style.HappyClientsBg}>
          <h3>Happy Clients</h3>
          <h2>What people say</h2>
          <div className={style.line}></div>

          <div className="d-flex flex-wrap justify-content-around container">
            <div className={style.HappyClientsBox}>
              <div>
                <img src={HappyClientsImg1} alt="" />
              </div>
              <div className="d-flex flex-column align-items-start ms-4">
                <h2>Matthew Dix</h2>
                <h3>Graphic Design</h3>
                <div className={style.line}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore <br />
                  magna aliqua. Ut enim ad minim.
                </p>
              </div>
            </div>
            <div className={style.HappyClientsBox}>
              <div>
                <img src={HappyClientsImg2} alt="" />
              </div>
              <div className="d-flex flex-column align-items-start ms-4">
                <h2>Nick Karvounis</h2>
                <h3>Graphic Design</h3>
                <div className={style.line}></div>
                <p>
                  Sit amet, consectetur adipiscing elit, sed do eiusmod <br />{" "}
                  tempor incididunt ut labore et dolore magna aliqua. Ut <br />
                  enim ad minim veniam
                </p>
              </div>
            </div>
            <div className={style.HappyClientsBox}>
              <div>
                <img src={HappyClientsImg3} alt="" />
              </div>
              <div className="d-flex flex-column align-items-start ms-4">
                <h2>Jaelynn Castillo</h2>
                <h3>Graphic Design</h3>
                <div className={style.line}></div>
                <p>
                Ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                 eiusmod tempor incididunt ut labore et dolore magna <br />
                  aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className={style.HappyClientsBox}>
              <div>
                <img src={HappyClientsImg4} alt="" />
              </div>
              <div className="d-flex flex-column align-items-start ms-4">
                <h2>Mike Petrucci</h2>
                <h3>Graphic Design</h3>
                <div className={style.line}></div>
                <p>
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HappyClients;
