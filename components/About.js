import AboutItem from "../components/_AboutItem"
export default function About(){
    return(
        <div className="about">
            <h2>Massages</h2>
            <div className="about-item">
                <AboutItem src="../images/dos.jpg" content="Apaisement des tensions dorsales"/>
                <AboutItem src="../images/foot.jpg" content="Apaisement des tensions dorsales"/>
                <AboutItem src="../images/hand.jpg" content="Apaisement des tensions dorsales"/>
            </div>
            
        </div>
    )
}