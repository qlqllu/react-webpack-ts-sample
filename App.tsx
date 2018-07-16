import * as React from 'react';
//var SystemJS = require('./system-production.js');

/* global.replaceDynamicSrc = function (src) {
  console.log("Manipulating ", src);
  if(src.indexOf('remote-widget.js') > -1){
    return 'http://localhost:3000/remote-widget.js';
  }
  else{
    return src;
  }
}

global.setSDN = function () {
	return window.location.host;
} */

interface State{
  modules: {[moduleId: string]: any}
}

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
    let domain = 'http://localhost:3000';
    let jqueryUrl = `${domain}/a.js`;
    import(/* webpackChunkName: "remote-widget" */ `${domain}/remote-widget.js`).then(module => {
      this.setState({
        modules: Object.assign({}, this.state.modules, {widget: module})
      });
    });
  }

  fetchJQuery = () => {
    let domain = 'https://code.jquery.com';
    let jqueryUrl = `${domain}/jquery-3.3.1.min.js`;
    fetch(jqueryUrl).then(res => {
      this.setState({
        modules: Object.assign({}, this.state.modules, {jquery: res.body})
      });
    });
  }

  onShowCom2 = () => {
    this.state.modules.widget.showCom2().then(value => alert(value));
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
        <button onClick={this.loadJQuery}>Load module Widget</button>
        <div>Module Widget state: {this.state.modules.widget + ''}</div>
        <div>
          Module Widget function:
          <button onClick={() => alert(this.state.modules.widget.showCom1())}>Call showCom1 in module Widget</button>
          <button onClick={this.onShowCom2}>Call showCom2 in module Widget</button>
        </div>
      </div>

      <br/>
      <br/>

      <div className="module">
        <button onClick={this.fetchJQuery}>Fetch module JQuery</button>
        <div>Module JQuery state: {this.state.modules.jquery + ''}</div>
        <div>
          Module JQuery function:
          <button onClick={() => alert(this.state.modules.jquery)}>Call f1 in module JQuery</button>
        </div>
      </div>

    </div>

    );
  }
}

export default App;
