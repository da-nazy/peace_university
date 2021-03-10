
import './App.css';
import Headerwrapper from './components/Header/Headerwrapper.js';
import Amwrapper from './components/aboutmission/Amwrapper.js';
import LHGwrapper from './components/LHG/LHGwrapper.js';
import Serviceswrapper from './components/Ourservice/Serviceswrapper.js';
import Staffwrapper from './components/Ourstaff/Staffwrapper.js';
import Gallerywrapper from './components/Ourgallery/Gallerywrapper.js';
import Testwrapper from './components/testimonial/Testwrapper.js';
import Routewrapper from './components/RouteMap/Routewrapper.js';
import Contactuswrapper from './components/Contact/Contactuswrapper.js';
import Footerwrapper from './components/footer/Footerwrapper.js';
function App() {
  return (
    <div className="App">
    <Headerwrapper/>
    <Amwrapper/>
    <LHGwrapper/>
    <Serviceswrapper/>
    <Staffwrapper/>
    <Gallerywrapper/>
    <Testwrapper/>
    <Routewrapper/>
    <Contactuswrapper/>
    <Footerwrapper/>
    </div>
  );
}

export default App;
