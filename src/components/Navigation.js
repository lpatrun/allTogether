import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <Link to="/">HomePage</Link>
            <br></br>
            <Link to="/blog">Blog</Link>
            <br></br>
            <Link to="/login">LoginPage</Link>
            <br></br>
            <Link to="/contact">ContactPage</Link>
        </nav>
    );
}
