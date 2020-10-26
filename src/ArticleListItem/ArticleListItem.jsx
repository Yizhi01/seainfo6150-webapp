import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../AtricleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
    const [text, setText] = useState("Show more");
    function onToggleButton(e, text) {
        e.preventDefault();
        if (text === "Show less") {
            setText("Show more");
        } else {
            setText("Show less");
        }
    }
    let displayContent;
    if (text === "Show less") {
        displayContent = (
            <article>
                <h2>{props.article.title}</h2>
                <p>{props.article.shortText}</p>
                <time dateTime={props.article.timeStamp}>{props.article.displayDate} </time>
            </article>
        )
    } else {
        displayContent = <h2>{props.article.title}</h2>;
    }

    return (
        <li className={styles.article_item}>
            {displayContent}
            <ArticleTextToggleButton buttonText={text} onClick={onToggleButton} />
        </li>
    );
};

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired,
};

export default ArticleListItem;