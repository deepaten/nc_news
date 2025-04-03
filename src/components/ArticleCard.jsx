import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSingleArticle } from "../api/api";

function ArticleCard({article}) {
   
    return (
        <section className="card" > 
        <Link 
            key={article.title}           
            to={`/api/articles/${article.article_id}`}>               
               <h3>Date: {article.created_at} Title: {article.title} Author: {article.author} </h3> 
        </Link>        
        </section>
    );
}

export default ArticleCard;