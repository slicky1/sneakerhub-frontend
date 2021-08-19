import logo from './logo.svg';
import './App.css';
import BrandContainer from './components/BrandContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import BrandDetails from './components/BrandDetails';
import HomePage from './components/HomePage';
import CollectionDetails from './components/CollectionDetails';

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
           < HomePage/>
          </Route>
          <Route exact path="/brand">
            <BrandContainer />
          </Route>
          <Route path="/brand/:id">
            <BrandDetails />
          </Route>
          <Route path ="/collection/:id">
            <CollectionDetails />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
