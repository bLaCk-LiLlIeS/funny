
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ThingAgain from './thinkagain';
import ThinkOnce from './thinkonce';
import Sorry from './sory/Sorry';
import Chooly from './cholly';
import Cheppu from './cheppu';
import IKnow from './iknow';
import ThankU from './thanku';


function App() {
  return (
    

    <div className="App">
     

{/* SORRY START */}
<BrowserRouter>
<Routes>
<Route exact path="/" Component={Sorry} />
<Route path="/once" Component={ThinkOnce} />
<Route path="/again" Component={ThingAgain} />
<Route path="/cholly" Component={Chooly} />
<Route path="/cheppu" Component={Cheppu} />
<Route path="/know" Component={IKnow} />
<Route path="/thank" Component={ThankU} />
</Routes>
</BrowserRouter>
{/* SORRY END */}
    </div>
    
  );
}

export default App;
