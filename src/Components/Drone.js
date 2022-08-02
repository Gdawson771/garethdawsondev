import { Component } from "react";

export default function Drone() {

    return (
        <div>
             <h2 className="Drone--h2">Drone flight path algorithm</h2>
            <div className="Drone--MainDiv">

            <img className="Drone--map" src={require("../imgs/ILPFlightPath.jpg")} alt="dronePath" />
            <p classsName="Drone--p">An optimisation algorithm for an uber-eats drone which creates the highest possible profit route between as many
                customers and restaurants as it can
            </p>
            </div>
        </div>)
}