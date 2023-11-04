import React from 'react';
import Navbar from './Navbar/Navbar';
import Photo from '../../assets/jo.png';

interface HeaderProps {
  className?: string; // La prop 'className' est maintenant optionnelle
  content: string;
  changeContent: (newContent: string) => void;
}

const Header: React.FC<HeaderProps> = ({ className = "default-header-class", content, changeContent }) => {
  return (
    <div className={className}>
      <div className="photo">
        <img src={Photo} alt="Ma Photo" />
      </div>
      <div className='Header-Right'>
        <div className="name">SERAFINI JORDAN</div>
        <div className="job">DÉVELOPPEUR WEB</div>
        <Navbar content={content} changeContent={changeContent} />
      </div>
    </div>
  );
}

export default Header;
