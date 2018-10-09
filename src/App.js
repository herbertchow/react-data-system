import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Button, Layout } from 'element-react';

import 'element-theme-default';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout.Row>
            <Layout.Col span="24">
                <div className="grid-content bg-purple-dark">sda</div>
                <Button type="primary">Hello</Button>
                <i className="el-icon-edit"></i>
            </Layout.Col>
        </Layout.Row>

        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
