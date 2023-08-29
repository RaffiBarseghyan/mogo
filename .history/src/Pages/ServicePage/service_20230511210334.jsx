import style from "./service.module.scss";
import ipad from "../../Assets/Images/ipad.png";
import iphone from "../../Assets/Images/iphone.png";

function Service() {
  return (
    <>
      <div className={`${style.Service}`}>
        <h3>Service</h3>
        <h2>what we do</h2>
        <div className={style.line}></div>

      </div>
    </>
  );
}

export default Service;
