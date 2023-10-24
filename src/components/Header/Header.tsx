import Navbar from './Navbar/Navbar';
import Photo from '../../assets/jo.png';

function Header({ content, changeContent }) {
  return (
    <div className="Header">
      <div className="photo">
        <img src={Photo} alt="Ma Photo" />
      </div>{' '}
      <div className="name">SERAFINI JORDAN</div>
      <div className="job">DEVELOPPEUR WEB</div>
      <Navbar content={content} changeContent={changeContent} />
    </div>
  );
}

export default Header;
