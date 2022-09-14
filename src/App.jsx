import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardData from "./data"

export default function App(){
    const cards = cardData.map(data=>
            <Card 
                key={data.id}
                {...data}
            />
        )
    return(
        <>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}