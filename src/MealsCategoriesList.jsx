// importation des fonctions useeffect et usestate de react
import { useEffect, useState } from "react";

const CategoriesList = () => {
  console.log("Recettes de cuisine 2");

// stockage des données récupérer avec usestate dans un tableau et execution 1 seul fois avec la fonction useEffect pour eviter une boucle infini
  const [categories, setCategories] = useState([]);
  useEffect(()=>{

// fetch sur l'API categories pour récupérer les categories
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php ")
        .then((dataJson) => {

        // return au format Json
        // translate au format JS
          return dataJson.json();
        })
        .then((dataJs) => {
          console.log (dataJs)
          setCategories(dataJs.categories);
        });
    },[]);

    
    // return de mon tableau categories
    return (
      <div>
        {categories.map((categorie) => {
          return (

            // je return le titre,la photo et les descriptions de ma categories pour les affichers sur ma page
            <div>
              <h2>{categorie.strCategory}</h2>
              <img src={categorie.strCategoryThumb}/>
              <p>{categorie.strCategoryDescription}</p>
            </div>
          );
        })}
      </div>
    );
};

// export MealsCategoriesList vers App.js
export default CategoriesList;