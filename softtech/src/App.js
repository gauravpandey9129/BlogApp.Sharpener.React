 import React from "react";
import TopNavbar from "./Components/Header/Navbar";
import { BlogContextProvider } from "./ContextApi/Context";
import Blogs from "./Components/Blog/Blogs";
  

function App() {
  return (
    <BlogContextProvider>
    <TopNavbar/>
    <Blogs/>
    
    
    </BlogContextProvider>
  );
}

export default App;
