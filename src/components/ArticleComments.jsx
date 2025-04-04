import { useState, useEffect} from "react"
import { getArticleComments } from "../api/api"
import CommentsFormat from "./CommentsFormat"


function ArticleComments({article_id}) {
    const [articleComments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        getArticleComments(article_id)
        .then((comments)=>{
            setComments(comments)
            setIsLoading(false)
        })
        .catch((error)=>{
            setIsError(true)
        })
    },[])

        if (isLoading)        {
            return <p>("Loading please wait...")</p>
        }

        if (isError)        {
            return <p>("Error occured while loading comments...")</p>
        }  


    return (
            articleComments.map((comment)=>{ 
                
            return   (                     
                <p key={comment.comment_id}>{comment.body}</p>
                )
        })
       )
}

export default ArticleComments;