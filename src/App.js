import LandingPage from './Docs/pages/landing_page';
import Login from './Docs/pages/loign';
import Sign from './Docs/pages/sign';
import Error from './Docs/pages/error';
import './Docs/style/App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/sign' element={ <Sign /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
