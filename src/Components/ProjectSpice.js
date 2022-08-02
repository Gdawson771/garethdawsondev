export default function ProjectSpice() {
    return (
        <div>
            <h2 className="ProjectSpice--h2">Alexa activated spice machine</h2>
            <div className="ProjectSpice--mainDiv">


                <img className="ProjectSpice--dispicerPoster" src={require("../imgs/SpicePoster.png")} alt="spiceDispenserPoster" />
                <img className="ProjectSpice--dispicerDevice" src={require("../imgs/SpiceDevice.jpg")} alt="spiceDispenserDevice" />
                <p>The Dispicer is a voice activated, alexa integrated, automatic spice dispensing and grinding machine my team made
                    as one of our final projects.
                </p>
            </div>
        </div>)
}