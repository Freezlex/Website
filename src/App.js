import './style/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Navigation, Footer} from "./components/Components";
import { Home, Twitch, Discord, PageNotFound } from "./view/Views";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/twitch" exact component={() => <Twitch />} />
          <Route path="/discord" exact component={() => <Discord/>}/>
          <Route path="*" component={() => <PageNotFound/>}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
