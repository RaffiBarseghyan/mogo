import style from "./service.module.scss";
import ipad from "../../Assets/Images/ipad.png";
import iphone from "../../Assets/Images/iphone.png";

function Service() {
  return (
    <>
      <div className={`${style.Service}`}>
        <h3>For all devices</h3>
        <h2>Unique design</h2>
        <div className={style.line}></div>

      </div>
    </>
  );
}

export default Service;
