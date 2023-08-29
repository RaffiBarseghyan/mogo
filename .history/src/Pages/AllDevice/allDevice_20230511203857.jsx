import style from "./allDevice.module.scss";
import ipad from "../../Assets/Images/ipad.png";
import iphone from "../../Assets/Images/iphone.png";

function AllDevice() {
  return (
    <>
      <div className={`${style.allDevice}`}>
        <div className={style.allDeviceBg}>
          <h3>We work with</h3>
          <h2>Amazing Services</h2>
          <div className={style.line}></div>
          <img src={ipad} alt="" className={style.ipad}/>
          <img src={iphone} alt="" className={style.iphone} />
        </div>
      </div>
    </>
  );
}

export default AllDevice;
