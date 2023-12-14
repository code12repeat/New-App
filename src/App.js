import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{
     fetch('https://newsapi.org/v2/everything?q="+category+"&from=2023-12-13&apiKey=2ed8252acaa146869cad535935f1a903')
    .then((reponse)=>reponse.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])

  return (
    <div className="App">
    <header className='header'>
      <h1>Today's Talk</h1>
      <input type="text" onChange={(event)=>{
       if(event.target.value!==""){
        setCategory(event.target.value);
       }
       else{
        setCategory("india");
       }
        
      }} placeholder="Search News"/>
    </header>
      
      <section className='news-articles'>
      {
        articles.length!==0?

        articles.map((article)=>{
          return(
            <News article={article}/>
          )
        }):
        
        <h1>No News Found</h1>
      }

      </section>
    </div>
  );
}

export default App;
