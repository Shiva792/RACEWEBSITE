import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import RacerMeets from './pagemaari/Racermeets';
import Favorites from './pagemaari/favourites';
import NewRaces from './pagemaari/newraces';
import NaviMain from './components/layout/Navimain';
function App() {
  return <div>
    <NaviMain/>
    <Routes>
    <Route path='/'element={<RacerMeets />}/>
    <Route path='/newraces' element={<NewRaces />}/>
    <Route path='/favorites'element={<Favorites />}/>
    </Routes>
  </div>
}

export default App;
