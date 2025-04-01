import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-5kyq.onrender.com",
    timeout: 1000,
  });

export const getArticles=()=>
{
    return ncNewsApi.get("/api/articles").then(({data})=>{
        return data.articles;
    })
}

