import React,{useEffect, useState} from "react";
import axios from "axios";


const ImageSearch = ({setText})=>{
   
    const[searchInput,setSearchInput] = useState("random");
    const[page,setPage] = useState(1);
    
    
    useEffect((e)=>{
      searchForImage(e,false);
    },[page])

    async function searchForImage(e,initialSearch){
        if(e)e.preventDefault();
        if(initialSearch){
            setPage(1);
            return;
        }
        const result = await axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                "Accept-Version": "v1"
            },
            params:{
                query: searchInput,
                client_id:`${process.env.REACT_APP_UNSPLASH_API_KEY}`,
               per_page:20,
                page:page
            }
        });
       
        setText(result.data.results);
        

    }
    return(
        <div className="search-img">
            <form onSubmit={(e) => {
      searchForImage(e, true);
   }}>
                <input type = "text" placeholder="Search anything..." onChange={(e)=>{setSearchInput(e.target.value);}}></input>
                <button type="Submit">Search</button>
            </form>
            {
                page>1 &&  <button type="button" onClick={()=>{setPage(page-1);}}>Prev</button>
            }
            <button type="button" onClick={()=>{setPage(page+1);}}>Next</button>
           
        </div>
    )
}




export default ImageSearch;