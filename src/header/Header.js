import './header.css';
import headerPic from '../assets/header/header2.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
                <img className='headerImg' src={headerPic} alt=''/>

            </div>
        </div>
    )
}
