import './App.css';
import { LocationProvider } from './context/LocationContext';
import { StationProvider } from './context/StationContext';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ScreenMap from './components/Map';
import Stations from './components/Stations';


function App() {
  return (
    <div className="App">
      <StationProvider>
        <LocationProvider>
          <Navbar />
          <Stations />
          <Main />
          <ScreenMap />
        </LocationProvider>
      </StationProvider>
    </div>
  );
}

export default App;
