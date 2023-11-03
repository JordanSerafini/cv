import { useState } from 'react';

import Header from '../Header/Header';
import Cv from '../mainContent/Cv';
import Home from '../mainContent/Home';
import Portofoglio from '../mainContent/Portofoglio';

import '../../styles/_reset.scss';
import './App.scss';


function App() {
  // NAVBAR
  const [content, setContent] = useState('Home');

  const changeContent = (newContent: string) => {
    setContent(newContent);
  };

  const renderContent = () => {
    switch (content) {
      case 'Home':
        return <Home />;
      case 'Cv':
        return <Cv />;
      case 'Portofoglio':
        return <Portofoglio />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header
        className="Header"
        content={content}
        changeContent={changeContent}
      />
      <div className="content-grid">{renderContent()}</div>{' '}
    </div>
  );
}

export default App;
