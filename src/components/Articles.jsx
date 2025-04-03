import { useState, useEffect } from "react";
import {getArticles} from "../api/api";
import Makebold from "./Makebold";
import ArticleCard from "./ArticleCard";

function Articles({setArticleId}) {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)

useEffect(()=>{

    getArticles()
    .then((articles)=>{
        setArticles(articles);
        setIsLoading(false)
    })
    .catch((error)=>{
        setIsError(true)
        setIsLoading (false)
    })
},[])

if (isLoading )
{
    return <p>("Loading please wait...")</p>
}

if (isError )
{
    return <p>("Error occured...")</p>
}
    return (
   
            articles.map((article)=>{
                return (
                <ArticleCard article={article} key={article.author+article.article_id} 
                setArticleId={setArticleId}/>  )
            })
     
    )
};

export default Articles;