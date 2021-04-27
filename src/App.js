import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LeagueDetails from './Component/LeagueDetails/LeagueDetails';
import NoMatch from './Component/NoMatch/NoMatch';



function App() {
  return (
    <div className="App">
          
       
        
        
            <Router>
               <Switch>
                  <Route path='/home'>
                  <Header></Header>
                      <Home></Home>
                      
                  </Route>
                  <Route exact path='/'>
                  <Header></Header>
                       <Home></Home>
                      
                  </Route>

                  <Route exact path='/team/:teamID'>
                      <LeagueDetails></LeagueDetails>
                  </Route>

                  <Route path="*">
                        <NoMatch></NoMatch>
                  </Route>
              </Switch>
            </Router>

        

    </div>
  );
}

export default App;
