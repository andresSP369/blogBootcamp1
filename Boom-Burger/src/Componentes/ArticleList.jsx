export const ArticleList = ({ articles }) => {
	return (
        <section className="article-list">
            {articles.map(article => (
                <section className="article-container" key={article.id}>
                    <section className="img-container">
                        <img src={article.image} alt={article.title} />
                    </section>
                    <section className="article-body">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <section className="article-footer">
                            <span>{article.date} · </span>
                            <span>{article.ReadingTime}</span>
                        </section>
                    </section>
                </section>
            ))}
        </section>
    )
};