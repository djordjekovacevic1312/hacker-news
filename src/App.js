import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import NewsBuilder from './containers/NewsBuilder/NewsBuilder';

class App extends Component{

  render() {
    
    return (
      <div className="App">
        <Layout>
          <NewsBuilder/>
        </Layout>
       </div>
    );
  }
}

export default App;
