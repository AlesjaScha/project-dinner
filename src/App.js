import video from './dinner.mp4';
import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

const MY_ID = "e82042f8";
const MY_KEY = "95df108679f5e1640b778cc2cb05ef97";


const[mySeach,setMySearch]= useState("");
const[myRecipes,setMyRecipes]= useState([]);
const [wordSubmitted,setWordSubmitted]=useState("chicken");



useEffect(()=>{
  async function fetchData(){ 
  const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipes(data.hits);
  
  }
  fetchData();
   
},[wordSubmitted])

const myRecipeSearch = (e)=>{
    setMySearch(e.target.value)
}

const finalSearch =(e)=>{
  e.preventDefault();
  setWordSubmitted(mySeach);
}

  return (
    <div className="App">
    <div className="container">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
            <h1>Finde dein Rezept für das Weihnachtsessen</h1>
    </div>

    <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search'placeholder='Suchen...'onChange={myRecipeSearch}value={mySeach} ></input>
        </form> 
      </div>

        <div className='container'>
          <button>
            <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/128/external-chicken-meat-icongeek26-linear-colour-icongeek26.png"width="50px"alt="icon"/>
          </button>
        </div>  

        {myRecipes.map((element,index) =>(
          <MyRecipesComponent key={index}
            label= {element.recipe.label}
            cuisineType={element.recipe.cuisineType}
            image={element.recipe.image}
            dinner={element.recipe.ingredientLines}
            />
        ))}

  </div>
  );
}

export default App;
