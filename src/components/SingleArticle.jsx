import { useState, useEffect } from "react"
import { getSingleArticle } from "../api/api"
import { useParams } from "react-router-dom"

function SingleArticle() {
    const [singleArticle, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const {article_id} = useParams()

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
                <h4><span>{singleArticle.created_at}   </span> <span > {singleArticle.title}  </span></h4>
                <p>{singleArticle.body}</p>
                <h5>Author: {singleArticle.author}</h5>
                <label htmlFor="Votes">Votes</label>
                <p>{singleArticle.votes}</p>
            </section>

        </div>
    );
}

export default SingleArticle;