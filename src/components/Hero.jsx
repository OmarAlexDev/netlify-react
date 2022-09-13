import React from "react";
import HeroImg from "../assets/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={HeroImg} className="hero-img"></img>
            <h1 className="hero-title">Online Experiences</h1>
            <h1 className="hero-sub">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h1>
        </section>
    )
}