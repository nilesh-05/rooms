import React from 'react'
import './InfoBar.css'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
const InfoBar = ({ room }) => {
	return (
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img src={onlineIcon} alt="Icon" className="onlineIcon" />
				<h3>{room}</h3>
			</div>
			<div className="rightInnerContainer">
				<a href="/"> <img src={closeIcon} alt="close Icon" /> </a>
			</div>
		</div>
	)
}
export default InfoBar