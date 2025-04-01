

function ArticleCard({article}) {

    return (
        <section className="card" > 
        <h3>Date: {article.created_at} Title: {article.title} Author: {article.author} </h3>     
        </section>
    );
}

export default ArticleCard;