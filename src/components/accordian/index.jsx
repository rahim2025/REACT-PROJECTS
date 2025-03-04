import {useState} from "react";
import data from "./data";
export default function Accordian(){
        const [selected,setSelected] = useState(null);
        function handleClick(id){
            setSelected(selected === id ? null : id);
            console.log(id);
        }
        
     return <div>   
        {data && data.length>0 ? ( 
            data.map((item)=>(
                <div> 
                    <h3>{item.question}</h3>
                    <button onClick={()=>handleClick(item.id)}><span> show answer </span></button> 
                    <div>
                        {
                            selected === item.id ? <h3>{item.answer}</h3> :
                            null
                        }
                    
                    </div> 
                </div>
            )) 
        ) : <p>Data not found</p>
    }
    </div>
    

}