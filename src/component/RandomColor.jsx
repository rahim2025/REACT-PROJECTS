
import React from "react";
import { useState } from "react";
export default function RandomColorGenerator() {

    const [color,setColor] = useState("#000000");
    const [typeOfcolor,setTypeOfColor] = useState("hex");
    function generateRgbColor(){
        let r = randomNumber(256);
        let g= randomNumber(256);
        let b = randomNumber(256);
        setColor(`rgb(${r},${g},${b})`);
        setTypeOfColor("rgb");
    }

    function randomNumber(length){
        return Math.floor(Math.random()*length)
    }

    function generateHexColor(){
        let hex = "#";
        const letters = "0123456789ABCDEF";
        for(let i =0;i<6;i++){
            hex+= letters[randomNumber(letters.length)]
        }
        setColor(hex);
        setTypeOfColor("hex");

    }
    return(
        <div style={
            {   
                height:"100vh",
                width:"100vw",
                backgroundColor:color,
            }
        } >
        <div style={{
            display:"flex",
            justifyContent:"center",
            gap: "10px",
            padding:"20px"
        }}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={generateRgbColor}>Generate RGB color</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={generateHexColor}>Generate HEX color</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" 
            onClick= {typeOfcolor==="hex" ?generateHexColor :generateRgbColor}>Generate color</button>
        </div>

        <div style={{
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            fontSize:"60px",
            marginTop:"50px",
            flexDirection:"column"

        }}>
            <h3>{typeOfcolor==="hex"?"HEX COLOR":"RGB COLOR" }</h3>
            <h2>{color}</h2>
        </div>

        </div>
        
        
    )
}