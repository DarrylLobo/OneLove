import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from "@material-ui/core/IconButton"; // Makes the icons work like buttons
import Logo from './img/ol_heart_logo.png'


function Header() {
    return(
        //BEM "standard for naming convention"
        <div className="header">
            <IconButton>
                <PersonIcon className= "header__icon" fontsize="large"/>
            </IconButton>
            
            <img 
                className = "header__logo"
                src={Logo} //this is imported from
                alt = "ol heart logo"
            />
            <IconButton>
                <ChatBubbleIcon className= "header__icon" fontsize="large"/>
            </IconButton>

            
           
        </div>

    )  
}

export default Header;