import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
    let displayContent;
    if (props.articlelist.length) {
        displayContent = (
            <ul className={styles.list}>
                {props.articlelist.map((article) => (<ArticleListItem article={article} key={article.slug}/>))}
            </ul>
        )
    }else {
        displayContent = <div>You have no data!</div>;
    }
    
    return (
        <div className={styles.container}>
            {displayContent}
        </div>
    );
};

ArticleList.propTypes = {
    articlelist: PropTypes.array.isRequired
}

export default ArticleList;