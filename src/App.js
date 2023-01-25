import { Route, Switch } from 'react-router-dom';
import Main from './components/layout/Main/Main';
import RGB from './components/layout/RGB/RGB';
import NotFound from './components/layout/NotFound/NotFound';

function App() {
  const regex = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  const red = `:r${regex}`;
  const green = `:g${regex}`;
  const blue = `:b${regex}`;
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path={`/rgb/${red}/${green}/${blue}`} component={RGB} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
