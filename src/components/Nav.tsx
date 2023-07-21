import logo from "/HT-1.png"
import {motion} from "framer-motion"  
import { useState } from "react" 
import { useMediaQuery } from "../Util/usemedia"
import home from "/home .png"
import "@fontsource/jetbrains-mono"
import lin from "/linkedin-sign.png"
import git from "/github.png"
import res from "/resume.png"
// import "../styles/nav.css"

const navMotion = {
    visible:{
        opacity:1,
        transition:{
            when:"beforeChildren",
            staggerChildren:0.2,
        }},
    hidden:{
        opacity:0}
    }
const itemMotion = {
    visible: {opacity:1, x:0},
    hidden: {opacity:0, x:-100}}


const font = {fontFamily:"JetBrains Mono", 
                fontSize:"x-large",
                letterSpacing:"0.1em",
                color:"#282828",
                right:"0px",
                top:"0px",
                bottom:"0px",
                left:"1900px",
                position:"flex"}

const links = {fontFamily:"JetBrains Mono", 
fontSize:"large",
letterSpacing:"0.1em",
color:"#282828",
right:"0px",
top:"0px",
left:"0px",
fontstye:"bold"}


export default function Nav() {
    const [toggled,setToggled] = useState(false)
    const matches = useMediaQuery('(min-width: 1080px)') 
    return (
        <nav className="relative mx-8 mb-24 flex justify-between items-center pt-6 pb-6 font-medium md:mx-16 lg:mx-90">
            <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width = "250"
                height = {4}
                viewBox = "0 0 250 4"
                fill = "none"
                xmlns = "http://www.w3.org/2000/svg"
            >
            <path d="M2 2L248 2" stroke="#282828" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* <div>
                <img src={logo} style={{height:80, width:80}} alt="HT"/>
            </div> */}
            
            <h1 className=" text-x-lg font-bold " style= {font}>Haneef Taher</h1>
            
            {/* change font to jetbrains-mono */}
            {
            matches &&(
            <div className="flex gap-12" style={links}>
                < a href = "https://github.com/HaneefT" target="_blank" > <img src={git} /> </a>
                < a href = "https://haneeft.github.io/resume/resume.pdf" target="_blank"><img src={res} /> </a>
                < a href = "https://www.linkedin.com/in/syed-haneef-623b7a218/" target="_blank">  <img src={lin} />  </a>
            </div>)}
            {!matches &&(<div onClick={()=> setToggled((prevToggle)=>!prevToggle)} 
            className="space-y-1.5 cursor-pointer z-50" >
                <motion.span 
                animate={{rotateZ: toggled ? 45 : 0, y:toggled ? 8 : 0,width:toggled ? 35 : 32}}
                className="block h-0.5 w-8 bg-black"></motion.span>
                <motion.span 
                animate={{width:toggled ? 0:24}}
                className="block h-0.5 w-6 bg-black"></motion.span>
                <motion.span 
                animate={{rotateZ: toggled ? -45 : 0, y:toggled ? -8 : 0,width:toggled ? 35 : 16}}
                className="block h-0.5 w-4 bg-black"></motion.span>
            </div>)}
            {toggled && !matches && (
                <motion.div
                animate={{opacity:1, x:0}}
                initial={{opacity:0, x:25}}
                className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center"
                >
                <motion.div 
                variants={navMotion}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-24 text-lg">
                < motion.a variants={itemMotion} href = "https://github.com/HaneefT" target="_blank" >  <img src={git} /> </motion.a>
                < motion.a variants={itemMotion} href = "https://haneeft.github.io/resume/resume.pdf" target="_blank">  <img src={res} /> </motion.a>
                < motion.a variants={itemMotion} href = "https://www.linkedin.com/in/syed-haneef-623b7a218/" target="_blank" > <img src={lin} /> </motion.a>
                </motion.div>
                </motion.div>)}
        </nav>
    )
}

<style>

</style>