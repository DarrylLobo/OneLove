import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from "@material-ui/core/IconButton"; // Makes the icons work like buttons
import {Link, useHistory} from "react-router-dom";
import Logo from './img/ol_heart_logo.png';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function Header({ backButton }) {
    const history = useHistory();
    return(
        //BEM "standard for naming convention"
        <div className="header">
            {backButton ? (
                //if back button is true then display Backarrow
                <IconButton onClick ={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" classname="header__icon"/>
                </IconButton>
            ) : (
            
                //else show the profile icon
                <IconButton>
                    <PersonIcon className= "header__icon" fontSize="large"/>
                </IconButton>

            )}
            
            

            <Link to="/">
            <img 
                className = "header__logo"
                src={Logo} //this is imported from
                alt = "ol heart logo"
            />
            </Link>
            
            
            <Link to="/chat">
                <IconButton>
                    <ChatBubbleIcon className= "header__icon" fontSize="large"/>
                </IconButton>
            </Link>



            
           
        </div>

    )  
}

export default Header;