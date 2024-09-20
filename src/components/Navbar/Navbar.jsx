import PropTypes from 'prop-types';
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo1.png'
import search_icon from '../../assets/search.png'
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"



const Navbar = ({setSidebar}) => {
  return (
    <nav
    className='flex-div'
    >
        <div
        className='nav-left flex-div'
        >
            <img  className='menu-icon' onClick={()=> setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=''/>
            <img className='icon'  src={logo} alt='' height={50} width={50} />
        </div>
        <div
        className='nav-middle flex-div'
        >
            <div className= "search-box flex-div">
                <input
                type='text'
                placeholder='Search'
                />
                <img className='search-icon' src={search_icon} alt=''/>
            </div>




   </div>
        <div
        className='nav-right flex-div'
        >
            <img src={upload_icon} alt=''/>
            <img src={more_icon} alt=''/>
            <img src={notification_icon} alt=''/>
            <img src={profile_icon} className='user-icon' alt=''/>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    setSidebar: PropTypes.func.isRequired,
  };
  

export default Navbar