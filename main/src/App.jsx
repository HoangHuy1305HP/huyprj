import React from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import FilterSidebar from './Components/FilterSidebar';
import Search from './Components/Search';
import Result from './Components/Result';
import CarList from './Components/Card/CarList';
import './App.css'
function App() {
  return (
    
    <div className='container'>
      <Header>
        <NavBar />
        <div className='headerContent'>
          <h1>New Cars</h1>
          <p>Homepage - New Cars</p>
        </div>
      </Header>
      <main style={{ display: 'flex' ,background:'black',width:'100%'}}>
        <FilterSidebar /> 
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
          <Search></Search>
          <Result></Result>
          <CarList></CarList>
        </div>
      </main>
    </div>
  );
}

export default App;