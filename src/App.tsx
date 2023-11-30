import './Components/Styles/App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Gamb from './Components/Images/Gamb.png';
import Account from './Components/Images/Account.png';
import { Links } from './Components/Navigation/navigation';
import { Path } from './Components/Navigation/navigation';

function App() {

  return (
    <div>
      <header>
        <div className='nav'>
          {Links().map(item => (
            <Link to={item.to} className='navtext' key={item.to}>{item.name}</Link>
          ))}
          <a href="https://mail.google.com/mail/&ogbl" className='navtext'>Почта</a>
          <a href="https://www.google.com/imghp?hl=ru&ogbl" className='navtext'>Картинки</a>
          <span><img src={Gamb} className='navtext' alt=''></img></span>
          <span><img src={Account} className='navtext' alt=''></img></span>

        </div>
      </header>
      <div>
        {Path().map(item => (
          <Routes>
            <Route path={item.path} element={item.element} />
          </Routes>
        ))}
      </div>
    </div >
  );
}

export default App;
