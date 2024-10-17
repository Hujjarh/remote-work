import './Header.css'
import logo from '../assets/images/logo.svg'
import dropDownMenu from '../assets/images/icon-arrow-down.svg'
import hamburger from '../assets/images/icon-menu.svg'


const Header = ()=>{
    return (
        <>
        <div className="header">
            <div id="nav-list">
            <img className='logo' src={logo} alt="" />
                <ul>
                    <li>Features <img src={dropDownMenu} alt="" /></li>
                    <li>Company <img src={dropDownMenu} alt="" /></li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="hamburger">
                <img src={hamburger} alt="icon menu" />
            </div>
            <div id="login">
                <nav>Login</nav>
                <button>Register</button>
            </div>
        </div>
       
        
        </>
    )
}

export default Header