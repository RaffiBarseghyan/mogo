import style from "./workWith.module.scss";
import ALARM from "../../Assets/Images/ALARM.png";
import LINEGRAPH from "../../Assets/Images/LINEGRAPH.png";
import COMPUTER_OK from "../../Assets/Images/COMPUTER_OK.png";
import BOOK from "../../Assets/Images/BOOK.png";
import HOME from "../../Assets/Images/HOME.png";
import IMAGE from "../../Assets/Images/IMAGE.png";

function WorkWith() {
  return (
    <>
      <div className={style.workWith}>
        <h3>We work with</h3>
        <h2>Amazing Services</h2>
        <div className={style.line}></div>
         
        <div className={`${style.workWithFooter} d-flex `}>
          <div className="d-flex">
            <div>
              <img src={ALARM} alt="" />
            </div>
            <div>
              <h2>Photography</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={LINEGRAPH} alt="" />
            </div>
            <div>
              <h2>Web Design</h2>
              <p>
                Ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={COMPUTER_OK} alt="" />
            </div>
            <div>
              <h2>Creativity</h2>
              <p>
                Dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={BOOK} alt="" />
            </div>
            <div>
              <h2>seo</h2>
              <p>
                Ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={HOME} alt="" />
            </div>
            <div>
              <h2>Css/Html</h2>
              <p>
                Lorem dolor sit amet, consectetur <br />
                adipiscing elit, sed do tempor.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={IMAGE} alt="" />
            </div>
            <div>
              <h2>digital</h2>
              <p>
                Sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkWith;
