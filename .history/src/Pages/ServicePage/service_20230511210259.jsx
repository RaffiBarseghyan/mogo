import style from "./service.module.scss";
import ipad from "../../Assets/Images/ipad.png";
import iphone from "../../Assets/Images/iphone.png";

function Service() {
  return (
    <>
      <div className={`${style.allDevice}`}>
        <div className={style.allDeviceBg}>
          <h3>For all devices</h3>
          <h2>Unique design</h2>
          <div className={style.line}></div>
          <img src={ipad} alt="" className={style.ipad}/>
          <img src={iphone} alt="" className={style.iphone} />
        </div>
      </div>
    </>
  );
}

export default Service;