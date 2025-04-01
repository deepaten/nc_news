import { useState, useEffect } from "react";
import {getArticles} from "../api/api";
import Makebold from "./Makebold";
import ArticleCard from "./ArticleCard";

function Articles() {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{

    getArticles()
    .then((articles)=>{
        setArticles(articles);
        setIsLoading(false)
    })
    .catch((error)=>{
        console.log("Error: ",error)
        setIsLoading (false)
    })
},[])

if (isLoading === true)
{
    return <p>("Loading please wait...")</p>
}

    return (
   
            articles.map((article)=>{
                return (
                <ArticleCard article={article} key={article.author+article.article_id}/>  )
            })
     
    )
};

export default Articles;