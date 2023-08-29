import style from "./happyClients.module.scss";
import HappyClientsImg1 from "../../Assets/Images/HappyClientsImg1.png";
import HappyClientsImg2 from "../../Assets/Images/HappyClientsImg2.png";
import HappyClientsImg3 from "../../Assets/Images/HappyClientsImg3.png";
import HappyClientsImg4 from "../../Assets/Images/HappyClientsImg4.png";

function HappyClients() {
  return (
    <>
      <div className={`${style.allDevice}`}>
        <div className={style.allDeviceBg}>
          <h3>Happy Clients</h3>
          <h2>What people say</h2>
          <div className={style.line}></div>
            <div>
                <img src="" alt="" />

            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </>
  );
}

export default HappyClients;
