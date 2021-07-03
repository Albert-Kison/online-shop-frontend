import Header from "./Header";
import Main from "./Main";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
