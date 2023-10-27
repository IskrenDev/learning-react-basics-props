import Article from "./Article.tsx";
import blogEntries from "../../../blogEntries.ts";

function ArticleList() {
    return (
        <div className="articles-list">
            {blogEntries.map((entry, index) => {
                return <Article
                    key = {index}
                    title={entry.title}
                    imageURL={entry.imageURL}
                    imageAlt={entry.imageAlt}
                    description={entry.description}
                />
            })}

        </div>
    )
}

export default ArticleList;