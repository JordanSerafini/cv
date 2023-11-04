//import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faAddressBook, faDownload  } from '@fortawesome/free-solid-svg-icons';
import homeLogo from '../../../assets/homeLogo.png';
import dlLogo from '../../../assets/dlLogo.png';
import portfoglioLogo from '../../../assets/portfoglioLogo.png';
import mailLogo from '../../../assets/mailLogo.png';



function Navbar({ content, changeContent }) {
  return (
    <div className="Navbar_Container">
      <ul className="NavBar_List">
        <li className="NavBar_Item Nav-Home" onClick={() => changeContent('Home')}>
            
        <img src={homeLogo} alt="Node Logo" />
        <p>Acceuil</p>
        </li>
        <li className="NavBar_Item Nav-Cv" onClick={() => changeContent('Cv')}>
        <img src={dlLogo} alt="Node Logo" />
          Cv
        </li>
        <li
          className="NavBar_Item Nav-Portofoglio"
          onClick={() => changeContent('Portofoglio')}
        >
          <img src={portfoglioLogo} alt="Node Logo" />

          Portofoglio
        </li>
        <li className="NavBar_Item Nav-Contact" onClick={() => changeContent('Contact')}>
        <img src={mailLogo} alt="Node Logo" />
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
