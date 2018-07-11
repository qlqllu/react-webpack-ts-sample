import * as React from 'react';
var SystemJS = require('./system-production.js');

interface State{
  modules: {[moduleId: string]: any}
}

/* SystemJS.config({
  map: {
    jquery: '//code.jquery.com/jquery-2.1.4.min.js'
  }
});

import $ from 'jquery'; */

class App extends React.Component<{}, State> {
  constructor(props){
    super(props);
    this.state = {
      modules: {
        a: null
      }
    }
  }

  loadModuleA = () => {
    import('./my-modules/a').then(module => {
      this.setState({
        modules: Object.assign({}, this.state.modules, {a: module})
      });
    });
  }

  loadJQuery = () => {
    let domain = 'https://code.jquery.com'
    let jqueryUrl = `${domain}/jquery-3.3.1.min.js`;
    SystemJS.import(jqueryUrl, 'web').then(module => {
      this.setState({
        modules: Object.assign({}, this.state.modules, {jquery: module.default})
      });
    });
  }

  fetchJQuery = () => {
    let domain = 'https://code.jquery.com'
    let jqueryUrl = `${domain}/jquery-3.3.1.min.js`;
    fetch(jqueryUrl).then(res => {
      this.setState({
        modules: Object.assign({}, this.state.modules, {jquery2: res.body})
      });
    });
  }

  render() {
    return (
    <div>
      
      <div className="module">
        <button onClick={this.loadModuleA}>Load module a</button>
        <div>Module A state: {this.state.modules.a + ''}</div>
        <div>
          Module A function: 
          <button onClick={() => alert(this.state.modules.a.f1())}>Call f1 in module A</button>
        </div>
      </div>

      <br/>
      <br/>

      <div className="module">
        <button onClick={this.loadJQuery}>Load module JQuery</button>
        <div>Module JQuery state: {this.state.modules.jquery + ''}</div>
        <div>
          Module JQuery function: 
          <button onClick={() => alert(this.state.modules.jquery('body')[0])}>Call f1 in module JQuery</button>
        </div>
      </div>

      <br/>
      <br/>

      <div className="module">
        <button onClick={this.fetchJQuery}>Fetch module JQuery</button>
        <div>Module JQuery state: {this.state.modules.jquery + ''}</div>
        <div>
          Module JQuery function: 
          <button onClick={() => alert(this.state.modules.jquery2)}>Call f1 in module JQuery</button>
        </div>
      </div>

    </div>

    );
  }
}

export default App;
