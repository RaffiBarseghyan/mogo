import style from "./allDevice.module.scss";
import aboutUs2 from "../../Assets/Images/ipad.png";
import aboutUs2 from "../../Assets/Images/iphone.png";

function AllDevice() {
  return (
    <>
      <div className={`${style.allDevice}`}>
        <div className={style.allDeviceBg}>
          <h3>We work with</h3>
          <h2>Amazing Services</h2>
          <div className={style.line}></div>
          <img src={} alt="" />
        </div>
      </div>
    </>
  );
}

export default AllDevice;
