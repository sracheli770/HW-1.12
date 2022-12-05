import React from 'react';
import './App.css';
import Header from './components/Header';
import ListShopping from './components/list-shopping/ListShopping'
import ListManager from './services/list-manager'

function App() {
  let manager = new ListManager()
  return (
    <div className="App">
      <Header title='Shopping List' />
      <ListShopping lists={(manager.list)} />
    </div>
  );
}

export default App;
