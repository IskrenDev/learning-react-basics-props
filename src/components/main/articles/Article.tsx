type Props = {
    title: string,
    imageURL: string,
    imageAlt: string,
    description: string
}
function Article({title, imageURL, imageAlt, description} : Props) {
    return (
        <article id="article1" className="article">
            <h3>{title}</h3>
            <img src={imageURL} alt={imageAlt} />
                <div className="divider"></div>
                <p>{description}</p>
        </article>
    )
}

export default Article;