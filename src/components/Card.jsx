import React from "react";
import Star from "../assets/star.png"
import Profile from "../assets/katie-zaferes.png"

export default function Card(){
    return(
        <div className="card">
            <img src={Profile} className="card-img"></img>
            <div className="card-stats">
                <img src={Star} className="card-star"></img>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}