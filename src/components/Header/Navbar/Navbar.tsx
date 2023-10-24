//import './Navbar.css';

function Navbar({ content, changeContent }) {
  return (
    <div className="Navbar_Container">
      <ul className="NavBar_List">
        <li className="NavBar_Item" onClick={() => changeContent('Home')}>
          Home
        </li>
        <li className="NavBar_Item" onClick={() => changeContent('Cv')}>
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
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
