import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-5kyq.onrender.com",
    timeout: 3000,
  });

export const getArticles=()=>
{
    return ncNewsApi.get("/api/articles").then(({data})=>{
        return data.articles;
    })
}


export const getSingleArticle=(articleId)=>
{
        return ncNewsApi.get(`/api/articles/${articleId}`).then(({data})=>{
        return data.article;
    })
}
