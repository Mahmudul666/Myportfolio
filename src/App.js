import React from 'react';
import './App.css';
import myimg from './image/myimg.jpg'
import style from './style.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Resume from './Components/Resume'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


class App extends React.Component {
  toggleHandler =() =>{

  console.log('Toggled alredy');
  }
 render(){
  return (
    <div className="App">
      
      <div className="container">
        <Header click = {this.toggleHandler}/>
        <Home/>
        <Resume/>
        <Work/>
        <Contact/>
        <Footer/>
        </div>
      </div>
    
  );
 }
}

export default App;
