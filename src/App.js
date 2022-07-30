import { useState } from 'react';

import './styles/app/app.css';
import Router from './components/Router'
import PresentationModal from './components/PresentationModal';

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <Router />
      <PresentationModal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
