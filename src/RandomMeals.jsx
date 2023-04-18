import { useEffect, useState } from "react";

const RandomMeals = () => {

    console.log("Recettes Aléatoire");
    
    const [meal, setMeal] = useState(null);
    
    useEffect(()=>{
        
  // fetch sur l'API meals pour récupérer une recette aléatoirement
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then((dataJson) => {
  
          // return au format Json des données
            return dataJson.json();
          })
  
          // translate au format JS des données
          .then((dataJs) => {
            console.log (dataJs)
            setMeal(dataJs.meals[0]);
          });
      },[]);

const handleClick = () => {
    console.log ("test button")
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((dataJson) => {

    // return au format Json des données
      return dataJson.json();
    })

    // translate au format JS des données
    .then((dataJs) => {
      console.log (dataJs)
      setMeal(dataJs.meals[0]);
    });
}


      // return de mon tableau meals
      // je return le titre,la photo et les instructions de ma recette aléatoire pour les affichers sur ma page
      return (
        <div>
            {meal === null ?
                <p>chargement...</p>  
            : 
                <div>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb}/>
                    <p>{meal.strInstructions}</p>
                </div>
            }

            <button onClick={handleClick}>Recette Aléatoire</button>

        </div>
      );
  };

export default RandomMeals;