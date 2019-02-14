import React from "react";
import { Link } from "react-router-dom";

export const Suggestions = (props) => {
    const words = props.words.map((word, index) => {
        return <li key={index}><Link to={"/recnik/" + word}>{word}</Link></li>;
    });
    return (
        <ul>
            {words}
        </ul>
    );
};