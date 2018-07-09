import * as React from 'react';

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
    let domain = 'https://code.jquery.com'
    let jqueryUrl = `${domain}/jquery-3.3.1.min.js`;
    import(jqueryUrl).then(module => {
      this.setState({
        modules: Object.assign({}, this.state.modules, {jquery: module})
      });
    });
  }

  render() {
    return (<div>
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
          <button onClick={() => alert(this.state.modules.jquery.f1())}>Call f1 in module JQuery</button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
