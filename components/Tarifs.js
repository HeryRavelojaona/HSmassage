import { useEffect, useState } from "react"
import TarifItem from "../components/_TarifItem"

export default function Tarifs(){
    const [ offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY( - window.pageYOffset * 0.3);

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY]);

    return(
        <div className="tarifs">
            <div className="title">
                <h2>Tarifs</h2>
            </div>
            <div className="list" style={{ backgroundPositionY: ""+ offsetY +"px" }}>
                <TarifItem name="30 minutes" price="40 €" />
                <TarifItem name="45 minutes" price="50 €" />
                <TarifItem name="1 heure" price="65 €" />
                <TarifItem name="1 heure 30" price="90€" />
                <TarifItem name="2 heures" price="120€" />
            </div>
        </div>
    )
}