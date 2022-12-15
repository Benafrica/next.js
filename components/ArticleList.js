import ArticleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={ArticleStyles.grid}>

     {articles.map((article)=>(
     <span className={ArticleStyles.card}>
        <h3>{article.title}</h3>
             { article.body}

     </span>
     ))}
     

    
    </div>

  )
}

export default ArticleList
