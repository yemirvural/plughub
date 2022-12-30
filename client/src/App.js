import './App.css';
import { LocationProvider } from './context/LocationContext';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ScreenMap from './components/Map';

function App() {
  return (
    <div className="App">
      <LocationProvider>  
        <Navbar/>
        <Main/>
        <ScreenMap/>
      </LocationProvider>
    </div>
  );
}

export default App;
