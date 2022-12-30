import './App.css';
import { LocationProvider } from './context/LocationContext';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <LocationProvider>  
        <Navbar/>
        <Main/>
      </LocationProvider>
    </div>
  );
}

export default App;
