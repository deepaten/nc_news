import { useState, useEffect } from "react"
import { getSingleArticle } from "../api/api"
import { useParams } from "react-router-dom"
import ArticleComments from "./ArticleComments"
import CommentsFormat from "./CommentsFormat"
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import UpdateVotes from "./UpdateVotes"
import { patchArticleVotes } from "../api/api"

function SingleArticle() {
    const [singleArticle, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [voteState, SetVoteState] = useState(false)
    const [likedislike, setLikeDislike] =useState(false)

    const navigate = useNavigate();

    const {article_id} = useParams()

    function handleClick(event)
    {
        event.preventDefault()
        console.log(" clicking likes")
    }

    const handlePatchRequest = (event) => {
        event.preventDefault()
        
        patchArticleVotes(article_id, event.target.value)
        .then((article)=>{
            setArticle(article)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log("error occured in votes update")
            setIsError(true)
        })
        SetVoteState(true)
      };

    useEffect(()=>{
        
        getSingleArticle(article_id)
        .then((article)=>{
            setArticle(article)
            setIsLoading(false)
           
        })
        .catch((error)=>{
            console.log("error occured")
            setIsError(true)
        })
    },[])

        if (isLoading)        {
            return <p>("Loading please wait...")</p>
        }

        if (isError)        {
            return <p>("Error occured...")</p>
        }  
    
    return (
      
        <div>
            <p >You are reading...</p>
            
            <section key={singleArticle.article_id+singleArticle.author} >
                <h4><span>{singleArticle.created_at}</span> <span > {singleArticle.title}  </span></h4>
                <p>{singleArticle.body}</p>
                <h5>Author: {singleArticle.author}</h5>
                <label htmlFor="Votes">Votes  </label>
                <div className="container" >   
                <button type="button" onClick={handlePatchRequest} value="add" >+</button> 
                <button type="button" onClick={handlePatchRequest} value="remove" >-</button> 
                </div>
                <p>{singleArticle.votes}</p>
            </section >
            <h2>Article Comments</h2>
            <CommentsFormat>
               <ArticleComments  article_id={article_id} />
            </CommentsFormat>
            
        </div>
    );
}

export default SingleArticle;