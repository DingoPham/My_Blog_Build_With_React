import Navbar from './components/Navbar.jsx';
import EveryDes from './components/EveryDes.jsx';
import Foot from './components/Foot.jsx';

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