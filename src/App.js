import logo from './logo.svg';
import './App.css';
import BrandContainer from './components/BrandContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import BrandDetails from './components/BrandDetails';

function App() {
  return (
    <div>
        {/* <h1>Sneaker Hub<BrandContainer /></h1> */}
        <Router>
      {/* <div className="app-container">
        <div className="app-background" /> */}
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
           <h2> Home Page</h2>
          </Route>
          <Route exact path="/brand">
            <BrandContainer />
          </Route>
          <Route path="/brand/:id">
            <BrandDetails />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
