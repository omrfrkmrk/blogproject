import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import profilePic from '../assets/profile/profile1.jpg';
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'> ABOUT ME</span>
                <img className='sidebarProfile' src={profilePic} alt=''/>
                <p>
                    I am Software Develepor with 4 years experience which have
                    different sector like households, telecommunication and banking.
                    Currently working on with Frontend Technologies.
                </p>              
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'> CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
                </ul>

            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'> FOLLOW US</span>
                <div className='sidebarSocial'>
                    <FacebookIcon className="sidebarIcon"></FacebookIcon>
                    <TwitterIcon className="sidebarIcon"></TwitterIcon>
                    <GitHubIcon className="sidebarIcon"></GitHubIcon>
                </div>
            </div>
        </div>
    )
}
