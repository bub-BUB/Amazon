import Login from './components/Login.js'
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Login.css';
import './styles/Cart.css';
import './styles/Subheader.css';
import './App.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  let cont2 = "Vasu"
  return (
    <div className="App">
      <Header con= {{cont2}}/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
