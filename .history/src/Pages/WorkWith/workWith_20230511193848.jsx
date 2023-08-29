import style from "./workWith.module.scss";
import ALARM from "../../Assets/Images/ALARM.png";

function WorkWith() {
  return (
    <>
      <div className={style.workWith}>
        <h3>We work with</h3>
        <h2>Amazing Services</h2>
        <div className={style.line}></div>
        <div className={`${style.workWithFooter}`}>
          <div>
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
              <img src="" alt="" />
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkWith;
