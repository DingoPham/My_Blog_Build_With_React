import Navbar from './components/Navbar.js';
import EveryDes from './components/EveryDes.js';
import Foot from './components/Foot.js';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <EveryDes />
      </section>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
