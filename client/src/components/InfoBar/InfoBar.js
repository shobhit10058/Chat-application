import React, { useState, Fragment } from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
  const [isToggle, setIsToggle] = useState(true)
  return (
    <Fragment>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <div id="menu_button">
            <input type="checkbox" id="menu_checkbox" onClick={() => setIsToggle(!isToggle)} />
            <label htmlFor="menu_checkbox" id="menu_label">
              <div id="menu_text_bar"></div>
            </label>
          </div>
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
      </div>
      {/* </div>
      {isToggle ? (<div className="onlinePeople">
        <h2>
          jhgjhghjghjghjghjgjhghg
        </h2>
        <h2>
          jhgjhghjghjghjghjgjhghg
        </h2>
        <h2>
          jhgjhghjghjghjghjgjhghg
        </h2>
        <h2>
          jhgjhghjghjghjghjgjhghg
        </h2>
        <h2>
          jhgjhghjghjghjghjgjhghg
        </h2>
      </div>) : (null)} */}
    </Fragment>
  )
};

export default InfoBar;