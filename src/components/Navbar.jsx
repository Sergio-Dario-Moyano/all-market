import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/navbar/_navbar.scss';
const Navbar = () => {


  return (
    <nav className='navbar'>
      <div className='navbar__bars'>
      <FontAwesomeIcon icon={faBars} className='navbar__bars__icon' />
      </div>
      <ul className='navbar__list'>
        <a href="#"><li className='navbar__item'>About</li></a> 
        <a href="#"><li className='navbar__item'>Jobs</li></a> 
        <a href="#"><li className='navbar__item'>Marketplace</li></a> 
      </ul>
      <div className='navbar__logo'>
        <span className='navbar__logo__text'>All</span>
        <span className='navbar__logo__text'>Market</span>
      </div>
      <div className='navbar__social'>
      <FontAwesomeIcon icon={faCircle} className='navbar__social__icon' />    
      <FontAwesomeIcon icon={faCircle} className='navbar__social__icon' />    
      <FontAwesomeIcon icon={faCircle} className='navbar__social__icon' />    
      </div>
    </nav>
  )
}

export default Navbar