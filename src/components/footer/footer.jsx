import React from "react";
import { ReactComponent as Icon} from '../../assets/hands-and-gestures.svg';
import './footer.style.scss';
import Currency from "../currency/currency";
import Countdown from "../countdown/countdown";

const Footer =()=> (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-message">
        <h2>Spalati-va pe maini!</h2>
        <Icon/>
      </div>
      <Countdown/>
      <Currency />
    </div>
    
  </div>
);

export default Footer;

