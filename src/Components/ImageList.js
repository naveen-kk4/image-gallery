

const ImageList = ({text})=>{
    
    
    return (
       
<div>
   {
    text.map((item)=>
       
        <img src={item.urls.thumb} alt={item.alt_description}/>
    )
   }
   
   
</div>
    );
    

}

export default ImageList;