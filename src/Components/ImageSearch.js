import React,{useEffect, useState} from "react";
import axios from "axios";


const ImageSearch = ({setText})=>{
    const[searchInput,setSearchInput] = useState("");
    useEffect(()=>{
      searchForImage(null,"random");
    },[])

    async function searchForImage(e,initialSearch){
        if(e)e.preventDefault();
        const result = await axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                "Accept-Version": "v1"
            },
            params:{
                query: searchInput || initialSearch,
                client_id:`${process.env.REACT_APP_UNSPLASH_API_KEY}`
            }
        });
       
        setText(result.data.results);

    }
    return(
        <div className="search-img">
            <form onSubmit={searchForImage}>
                <input type = "text" placeholder="Search anything..." onChange={(e)=>{setSearchInput(e.target.value);}}></input>
                <button type="Submit">Search</button>
            </form>
        </div>
    )
}




export default ImageSearch;