import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
        <div className="Nav">
          <Nav></Nav>
        </div>
        <div className = "Section">
          <Body></Body>
        </div>
        <div className="Footer">
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
