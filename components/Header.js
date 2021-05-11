import Social from "../components/_Social"
import { motion} from "framer-motion"
import Logo from "../components/_Logo"
export default function Header() {
    return (
        <div id="header">
            <Social />
            <div className="title">
                <p>Le bien être et la relaxation à portée de main</p>
                <div className="main">
                    <h1>
                        <motion.div 
                            initial={{ scale: 0.6 }} 
                            animate={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 2 }}
                        >
                            <Logo />
                        </motion.div>
                        <span>Massage bien-être</span>
                    </h1> 
                </div>
            </div>
            
        </div>
    )
}