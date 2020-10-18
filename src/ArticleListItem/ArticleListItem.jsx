import React from "react";

const ArticleListItem = (props) => {
    return (
        <article>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate} </time>
            <p>{props.article.shortText}</p>
        </article>
    );
};

export default ArticleListItem;