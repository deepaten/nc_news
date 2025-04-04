import { patchArticleVotes } from "../api/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";



function UpdateVotes({SetVoteState}) {
    const [updateVote, setUpdateVote] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

console.log(" Inside updatedvotes")
const {article_id} = useParams()

    useEffect(()=>{
    patchArticleVotes(article_id)
    .then((article)=>{
        console.log(article, " updated vote details")
        setUpdateVote(article)
        SetVoteState(false)
        setIsLoading(false)
    })
    .catch((error)=>{
        console.log("error occured in update vote")
        setIsError(true)

    })
},[])

    if (isLoading)        {
        return <p>("Loading please wait...")</p>
    }

    if (isError)        {
        return <p>("Error occured in Vote update...")</p>
    }

    return (
        <div>
            Inside votes
        </div>
    );
}

export default UpdateVotes;