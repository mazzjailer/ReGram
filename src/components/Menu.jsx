import React from "react";
import "../App.css";
import Home from "../assets/Home.svg";
import Activity from "../assets/Activity.svg";
import Search from "../assets/Search.svg";
import User from "../assets/User.svg";
import Post from "../assets/Post.svg";

export default function Menu() {
    return (
        <nav className="menu container">
            <ul className="row">
                <li className="col"><img src={Home}/></li>
                <li className="col"><img src={Search}/></li>
                <li className="col"><img src={Post}/></li>
                <li className="col"><img src={Activity}/></li>
                <li className="col"><img src={User}/></li>
            </ul>
        </nav>
    )
}