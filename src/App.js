import Navbar from './components/home-page/Navbar';
import EveryDes from './components/home-page/EveryDes';
import Foot from './components/home-page/Foot';
import ToTopFun from './components/other-function/ToTopFunction';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <section>
          <EveryDes />
        </section>
        <footer>
          <Foot />
          <ToTopFun />
        </footer>
        
      </div>
    </Router>
  );
}

export default App;