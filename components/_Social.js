import {motion} from "framer-motion"

export default function Social() {
    return (
        <div className="social">
            <motion.div 
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                 <a href="#" target="blanck" className="item"><img src="/images/insta.svg" alt="instagram" /></a>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1.2 }}
                transition=
                {{  duration: 1,
                    delay: 1 }}
            >
                <a href="#" target="blanck" className="item"><img src="/images/facebook.svg" alt="facebook" /></a>    
            </motion.div>
            <motion.div 
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1.3 }}
                transition={{ ease: "easeOut", duration: 1 ,
                delay: 1.5}}
            >
                <a href="#" target="blanck" className="item"><img src="/images/mail.svg" alt="facebook" /></a>  
            </motion.div>
            
            
        </div>
    )
}