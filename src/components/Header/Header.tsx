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
        <div className="name"><span className='name-Title'>SERAFINI JORDAN</span></div>
        <div className="Job"><span className='Job-Title'>DÉVELOPPEUR WEB</span></div>
        <div>
          <Navbar content={content} changeContent={changeContent} />
        </div>
      </div>
    </div>
  );
}

export default Header;
