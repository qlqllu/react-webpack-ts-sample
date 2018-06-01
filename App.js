import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages/p1">Page1</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/pages/:pageId" component={Page}/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Page = ({match}) => (
  <div>
    <h2>the page id: {match.params.pageId}</h2>
  </div>
)
export default App;
