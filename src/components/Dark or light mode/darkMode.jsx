import { useEffect, useState } from "react";
import "./darkMode.css"


export default function ToggleMode(){
    const [darkMode,setDarkMode] = useState(()=>{
        return localStorage.getItem("darkMode") ==="true" ;
    })
    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode);
    },[darkMode])

    function toggleMode(){
        setDarkMode((prev)=> !prev);
    }

    return (
        <div className={`container ${darkMode ? "dark" : ""} `}>
            <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggleMode} >Change mode</button>

        </div>
    )
}