import { use, useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QrCodeGenerator(){
    const[input,setInput] = useState("");
    const [qrCode,setQrcode] = useState("");
    function qrGenerator(){
        setQrcode(input);
        setInput("");
    }
    return (
        <div className="qr-container">

            <div className="qr-code">
                < QRCode value={qrCode} size={300}/>
            </div>
            <div className="qr-code">  
                <input type="text" value={input} placeholder="Enter your text" 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={qrGenerator}>Generate QR</button>
            </div>


        </div>
    )
}