import { Route, Switch } from 'react-router-dom';
import Main from './components/layout/Main';
import RGB from './components/RGB/RGB';
import NotFound from './components/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/rgb/:r/:g/:b" component={RGB} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
