import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    const articleList = props.articlelist;
    const mappedList = articleList.map((listItem, index) => (
        <li key={index}><ArticleListItem article = {listItem} /></li>
    ));
    return (
        <div>
            <ul>{mappedList}</ul>
        </div>
    );
};

export default ArticleList;