import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import EnglishPageAbout from "./components/EnglishPageAbout";
import FinnishPageAbout from "./components/FinnishPageAbout";
import HomePageEnglish from './components/HomePageEnglish';
import HomePageFinnish from './components/HomePageFinnish';
import Skill from './components/Skill';





class App extends Component {
  state= {
    lang: 'en',
    path: ''
  }

componentWillMount = () =>{
    // Retrieve your data from locaStorage
let saveData = JSON.parse(localStorage.saveData || null);
console.log(saveData);
if (saveData){
  this.setState({
      lang: saveData.lang
    })
  }
}

componentDidUpdate = () => {
  this.saveStuff(this.state);
}

updatePage = (abc) => {
  this.setState({
    path: abc
  })
  
  
  /*if (this.state.path ==='about'){
    this.setState({
      path:'/about/' 
    });
    return '/about/'
  }
  //(this.state.path === 'home') 
  else {
    this.setState({
      path:'/' 
    });
    return null 
  }*/
  
}

updateState = (abc) => {
  this.setState({
    lang: abc
  })
}
saveStuff = (data) => {
  let saveData=data;
  localStorage.saveData = JSON.stringify(saveData);
}

  render() {
    return (
      <div className="App">
          <Router>
        <div className="App">
          <div>
            <Header lang={this.state.lang} path={this.state.path}
             updateState={this.updateState}
             updatePage = {this.updatePage}
             />
            {/*<nav>
              <Link to={`/${this.state.lang}`}></Link>
              <Link to="/en" onClick={() => this.updateState('en')}> </Link>
              <Link to="/fi" onClick={() => this.updateState('fi')}> </Link>
              <Link to={`/about/${this.state.lang}`}> </Link>
              <Link to="/about/en" onClick={() => this.updateState('en')}> </Link>
              <Link to="/about/fi" onClick={() => this.updateState('fi')}></Link>
              <Link to="/blog"> </Link>
              <Link to="/gallery"> </Link>
            </nav>*/}
            

            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/en"
                render={props => (
                  <HomePageEnglish
                    {...props}
                    lang = {this.state.lang}
                    updateState = {this.updateState}
                  />
                )}
              />
              <Route
                path="/fi"
                render={props => (
                  <HomePageFinnish
                    {...props}
                    lang = {this.state.lang}
                    updateState = {this.updateState}
                  />
                )}
              />

              <Route exact path="/about" component={About} />
              <Route
                path="/fi"
                render={props => (
                  <HomePageEnglish
                    {...props}
                    lang = {this.state.lang}
                    updateState = {this.updateState}
                  />
                )}
              />

              <Route
                path="/about/fi"
                render={props => (
                  <FinnishPageAbout
                    {...props}
                    lang = {this.state.lang}
                    updateState = {this.updateState}
                  />
                )}
              />
              <Route
                path="/about/en"
                render={props => (
                  <EnglishPageAbout
                    {...props}
                    lang = {this.state.lang}
                    updateState = {this.updateState}
                  />
                )}
              />
              <Route
                path="/skill"
                render={props => (
                  <Skill
                      {...props}
                  />
                )}
              />
              
            </Switch>
          </div>
        </div>
      </Router>
    
      </div>
       
    );
  }
}

export default App;
