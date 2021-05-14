import AboutItem from "../components/_AboutItem"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function About(){
    const [ posY , setPosY] = useState(0);
    const aboutRef = useRef(null);
    const [ aboutOpacity , setAboutOpacity] = useState(0);
    useEffect(()=> {
        //Show Element when is visible
        function handleScroll() {
            if( window.scrollY > aboutRef.current.offsetTop/2 ) {
                setAboutOpacity(1); 
                return ()=> {
                    window.removeEventListener('scroll', handleScroll );
                }  
            } 
        };

        window.addEventListener('scroll', handleScroll );
    }, [ posY ]) 
    return(
        <div className="about" ref={ aboutRef }>
            <h2>Massages</h2>
            <motion.div initial={{ opacity : 0 }} animate={{ opacity :aboutOpacity}} transition={{ duration: 2 }} className="about-item">
                <AboutItem 
                    src="../images/dos.jpg" 
                    contentTitle="Apaisement des tensions dorsales" 
                    contentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                />
                <AboutItem 
                    src="../images/foot.jpg" 
                    contentTitle="Apaisement des tensions dorsales" 
                    contentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                />
                <AboutItem 
                    src="../images/hand.jpg" 
                    contentTitle="Apaisement des tensions dorsales" 
                    contentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"/>
            </motion.div>
            
        </div>
    )
}