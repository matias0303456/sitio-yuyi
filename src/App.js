import { useState } from 'react';

import './styles/app/app.css';
import Router from './components/Router'
import PresentationModal from './components/PresentationModal';
import { useLocation } from 'react-router-dom';

function App() {

  const [show, setShow] = useState(true)

  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <div className="App">
      <Router />
      <PresentationModal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
