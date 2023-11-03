//import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faAddressBook, faDownload  } from '@fortawesome/free-solid-svg-icons';

function Navbar({ content, changeContent }) {
  return (
    <div className="Navbar_Container">
      <ul className="NavBar_List">
        <li className="NavBar_Item" onClick={() => changeContent('Home')}>
                <FontAwesomeIcon icon={faHome} />

          Home
        </li>
        <li className="NavBar_Item" onClick={() => changeContent('Cv')}>
        <FontAwesomeIcon icon={faDownload} />
          Cv
        </li>
        <li
          className="NavBar_Item"
          onClick={() => changeContent('Portofoglio')}
        >
          Portofoglio
        </li>
        <li className="NavBar_Item" onClick={() => changeContent('Autres')}>
          Autres
        </li>
        <li className="NavBar_Item" onClick={() => changeContent('Contact')}>
        <FontAwesomeIcon icon={faAddressBook} />
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
