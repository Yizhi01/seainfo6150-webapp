import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
    const {buttonText, onClick } = props;
    return (
        <div>
            <button className={styles.btn} onClick={(e) => onClick(e, buttonText)}>{buttonText}</button>
        </div>
    );
};

ArticleTextToggleButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ArticleTextToggleButton;