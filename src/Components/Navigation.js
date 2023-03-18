import React from "react";

import { Link } from "react-router-dom";


export default function Navigation () {
    return (
        <nav>
            
            <Link to="/">HomePage</Link>
            <Link to="/blog">BlogPages</Link>
            <Link to="/contact">ContactPage</Link>
            <Link to="/login">LoginPage</Link>
            <Link to="*">Eror404Page</Link>
 

        </nav>
    )
}