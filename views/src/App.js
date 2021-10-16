import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddItem from './Views/AddItem';
import Navbar from "./Component/Navbar";
import EditItem from './Views/EditItem';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/item/add" component={AddItem}/>
          <Route exact path="/item/:id" component={EditItem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
