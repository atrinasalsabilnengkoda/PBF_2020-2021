import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import List from './component/List';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Atrina Salsabil Nengkoda' />
      </div>
    );
  }
}export default App;