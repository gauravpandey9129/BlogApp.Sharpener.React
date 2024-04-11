import React,{useContext,createContext, useState} from "react";

const BlogContext=createContext();

export const useBlogContext=()=>useContext(BlogContext);


export const BlogContextProvider=({children})=>{
 
    const [modalStatus,setModalStatus]=useState(false);
    const [blogs,setBlogs]=useState([])
         
          
         


     

    return(
   
        <BlogContext.Provider  value={{modalStatus,setModalStatus,blogs,setBlogs}} >
           {children}
        </BlogContext.Provider>


    );

}