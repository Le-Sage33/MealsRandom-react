// importation des fonctions useeffect et usestate de react
import { useEffect, useState } from "react";

const MealsList = () => {
  console.log("Recettes de cuisine");
// stockage des données récupérer avec usestate dans un tableau et execution 1 seul fois avec la fonction useEffect pour eviter une boucle infini
  const [meals, setMeals] = useState([]);
  useEffect(()=>{

// fetch sur l'API meals pour récupérer les recettes
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((dataJson) => {

        // return au format Json
          return dataJson.json();
        })

        // translate au format JS
        .then((dataJs) => {
          console.log (dataJs)
          setMeals(dataJs.meals);
        });
    },[]);
    // return de mon tableau meals
    return (
      <div>
        {meals.map((meal) => {
          return (

            // je return le titre,la photo et les instructions de ma recette pour les affichers sur ma page
            <div>
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb}/>
              <p>{meal.strInstructions}</p>
            </div>
          );
        })}
      </div>
    );
};

// export MealsList vers App.js
// export default MealsList;