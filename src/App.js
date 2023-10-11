import React ,{ Component } from 'react';
import './App.css';
import BlogSection from './BlogSection';
import Header from './Header';

  export class App extends Component { 


  render(){
    return (
      <>
    
      <Header/>
      <div id ="latest-post-section" > 
      <h2 id="lasted-post-heading"> Latest posts</h2> 
       <p> <i className="fa-solid fa-filter filter-icon"></i>Filter by Category</p>
      <button className='category-active-btn'>All</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      <button className='category-btn'>Artificial Intelligence</button>
      </div>
      <BlogSection/>
      

      </>
      
        
    )
  }
}


export default App;

