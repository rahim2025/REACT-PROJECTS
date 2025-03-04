import { useEffect } from "react";
import { useState } from "react"
import "./style.css";

export default function LoadMoreData(){
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const[count,setCount] = useState(0);
    async function fetchData(){
        setLoading(true);
        try{
        
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count}`);
            const result = await response.json();
            setItems((prevData)=>[...prevData,...result.products]);
            
        }catch(e){
            
            console.log(e);
        }finally {
            setLoading(false);

    }
}
    
    
    useEffect(()=>{
         fetchData();   
    },[count]);

    return (<div className="load-container">
        <div className="product-container">
            {
                items && items.length ? items.map((item,index)=>{
                    return( 
                    <div className="product" key={item.index}>
                        
                        <img src={item.thumbnail} alt={item.title}/>
                        <h1>{item.title}</h1>
                    </div>
                    )
                }) :null
            }
        </div>
        <div className="button-container">
                <button 
                    onClick={() => setCount((prevCount) => prevCount + 10)} 
                    disabled={loading} // Disable the button while loading is true
                >
                    {loading ? 'Loading... Please wait' : 'Load more'} {/* Show "Loading..." text while fetching */}
                </button>
            </div>       
    </div>)
}