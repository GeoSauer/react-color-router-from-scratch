import { Route, Switch } from 'react-router-dom';
import Main from './components/layout/Main/Main';
import RGB from './components/layout/RGB/RGB';
import NotFound from './components/layout/NotFound/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/rgb/:r/:g/:b" component={RGB} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
