import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon"></PersonIcon>
            </IconButton>
            <img className="header_logo" src="https://gotinder.com/images/tinder.png" alt=""/>

            <IconButton>
            <ForumIcon fontSize="large" className="header_icon"></ForumIcon>
            </IconButton>

        </div>
    )
}

export default Header;
