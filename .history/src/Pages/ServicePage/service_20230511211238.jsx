import style from "./service.module.scss";
import service from "../../Assets/Images/service.png";
import iphone from "../../Assets/Images/iphone.png";

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
          ea commodo consequat.{" "}
        </p>
        <div>
            <img src={service} alt="" />
        </div>
      </div>
    </>
  );
}

export default Service;
