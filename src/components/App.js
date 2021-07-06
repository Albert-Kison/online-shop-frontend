import Home from './Home';
import NotFound from './NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Home} />
          {/* <Route exact path="/cart" component={Home} /> */}
          <Route exact path="/admin/add-product" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
