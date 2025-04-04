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

export const getArticleComments=(articleId)=>
    {
            return ncNewsApi.get(`/api/articles/${articleId}/comments`).then(({data})=>{
            return data.comments;
        })
    }

    export const patchArticleVotes=(articleId, addReduce)=>
    {
        let votes = 1;
        if (addReduce === "add")
        {
            votes = 1
        }
        else{
            votes = -1
        }
            return ncNewsApi.patch(`/api/articles/${articleId}`,{inc_votes: votes}).then(({data})=>{
            return data.article;
        })
    }






