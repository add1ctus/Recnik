import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
    <header>
        <section id="headerLeft">
            <h1><Link to="/">Речник</Link></h1>
        </section>
        <section id="headerRight">
            <ul>
                <li><Link to="/">Почетна</Link></li>
                <li><Link to="/recnik">Речник</Link></li>
                <li><Link to="/calculator">Калкулатор</Link></li>
            </ul>
        </section>
    </header>
);