import "./topbar.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';

import profilePic from '../../assets/profile/profile1.jpg';

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <FacebookIcon className="topIcon"></FacebookIcon>
                <TwitterIcon className="topIcon"></TwitterIcon>
                <GitHubIcon className="topIcon"></GitHubIcon>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src={profilePic} alt=""></img>
                <SearchIcon className="topSearchIcon"></SearchIcon>
            </div>
        </div>
    )
}
