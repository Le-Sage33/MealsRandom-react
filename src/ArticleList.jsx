// import de la fonction usestate de react

import { useState, useEffect } from "react";


const ArticleList = () => {
  console.log("rendu du composant ArticleList");

  // creation d'une variable de state pour les éléments "articles" de "ArticleList" qui aura un tableau vide par défaut et chargement de celui-ci en asynchrone
  const [articles, setArticles] = useState([]);

  //le tableau d'articles est vide par défaut, on utilise la fonction "useEffect" afin de faire un seul tour de boucle pour la récupération des articles.
  
  useEffect(()=>{

    // on récupére les "articles" du fichiers "articles.json"
    fetch("./articles.json")

    // les données sont au format Json
      .then((dataJson) => {
        
        // transformation des données Json en JS
        return dataJson.json();
      })

      
      .then((dataJs) => {
       
     
        setArticles(dataJs);
      });
  },[]);

  // Affichage des éléments "articles" récupérer dans mon "ArticlesList"
  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;





