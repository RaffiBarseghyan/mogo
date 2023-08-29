import style from "./happyClients.module.scss";
import ipad from "../../Assets/Images/ipad.png";
import iphone from "../../Assets/Images/iphone.png";

function HappyClients() {
  return (
    <>
      <div className={`${style.allDevice}`}>
        <div className={style.allDeviceBg}>
          <h3>Happy Clients</h3>
          <h2>Unique design</h2>
          <div className={style.line}></div>

        </div>
      </div>
    </>
  );
}

export default HappyClients;
