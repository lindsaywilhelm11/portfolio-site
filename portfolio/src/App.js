import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path= "/" component= {Home} exact />
            <Route path="/about" component= {About} exact />
            <Route path="/resume" component= {Resume} exact />
            <Route path="/contact" component= {Contact} exact />
          </Switch>

      </BrowserRouter>
       
    </div>
  );
}

export default App;
