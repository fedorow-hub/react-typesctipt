import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';
import Form from './components/Form';
import MyComponent from './components/Portal';
import Context from './components/Context';
import HOC from './components/HOC';

function App() {
  return (    
    <>
      <HOC primTitle = "Main Title" secTitle = "Additional Title"/>
      {/* <Context/> */}
      {/* <MyComponent/> */}
      {/* <Form/> */}
      {/* <FuncComponent title="Another Hello" /> */}
      {/* <ClassComponent /> */}
    </>

  );
}

export default App;
