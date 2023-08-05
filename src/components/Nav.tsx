import {motion} from "framer-motion"  
import { useState } from "react" 
import { useMediaQuery } from "../Util/usemedia"
import TextWithEffect from "../components/Title"
import "@fontsource/jetbrains-mono"




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


export default function Nav() {
    const [toggled,setToggled] = useState(false)
    const matches = useMediaQuery('(min-width: 1080px)') 


    return (

        <nav className="relative mx-8 mb-24 flex justify-between items-center pt-6 pb-6 font-medium md:mx-16 lg:mx-90">

            <TextWithEffect/>

            {
            matches &&(
            <div className="flex gap-12" >
                < motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href = "https://github.com/HaneefT" target="_blank" > <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg> </motion.a>
                < motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href = "https://haneeft.github.io/resume/resume.pdf" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 20 20"><g fill="white"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"/><path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"/></g></svg> </motion.a>
                < motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href = "https://www.linkedin.com/in/syed-haneef-623b7a218/" target="_blank">  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39Zm1 7.516V6.234h-2v6.579h2ZM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234Z" clip-rule="evenodd"/></svg> </motion.a>
            </div>)}

            {!matches &&(<div onClick={()=> setToggled((prevToggle)=>!prevToggle)} 
            className="space-y-1.5 cursor-pointer z-50" >
                <div className="block">
                <motion.span 
                animate={{rotateZ: toggled ? 45 : 0, y:toggled ? 8 : 0,width:toggled ? 35 : 32}}
                className="block h-0.5 w-8 bg-white mt-1"></motion.span>
                </div>
                <div className="block">
                <motion.span 
                animate={{width:toggled ? 0:24}}
                className="block h-0.5 w-6 bg-white mt-1"></motion.span>
                </div>
                <div className="block">
                <motion.span 
                animate={{rotateZ: toggled ? -45 : 0, y:toggled ? -8 : 0,width:toggled ? 36 : 16}}
                className="block h-0.5 w-4 bg-white mt-1"></motion.span>
                </div>
                </div>)}

            {toggled && !matches && (
                <motion.div
                animate={{opacity:1, x:0}}
                initial={{opacity:0, x:25}}
                className="fixed flex top-0 bottom-0 left-0 w-full h-screen items-center justify-center"
                style={{ backgroundColor: 'black' }}
                >
                <motion.div 
                variants={navMotion}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-24 text-lg">
                < motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={itemMotion} href = "https://github.com/HaneefT" target="_blank" >   <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>  </motion.a>
                < motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={itemMotion} href = "https://haneeft.github.io/resume/resume.pdf" target="_blank">  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 20 20"><g fill="white"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"/><path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"/></g></svg> </motion.a>
                < motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={itemMotion} href = "https://www.linkedin.com/in/syed-haneef-623b7a218/" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39Zm1 7.516V6.234h-2v6.579h2ZM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234Z" clip-rule="evenodd"/></svg> </motion.a>
                </motion.div>
                </motion.div>)}
        </nav>

    )
}

