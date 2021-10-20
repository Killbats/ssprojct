import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './CSS/HeaderApp.css';
import Notfound from './Component/notFound/notFound'; 
//import feeds from './Component/Feeds/feeds';
import Home from './Component/Home/home';

class App extends Component{
  state = {
    isLoading: true,
  };

  componentWillMount() {
    this._timer = setTimeout(
      () => this.setState({isLoading: false}),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }
    render(){
      var switchVar;
      switchVar = 
      <div> 
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route component={Notfound} />
          </Switch>
      </div>
      return (
        <Router>
          {switchVar}
        </Router>

       
      )
    }
    
}

export default App;
