import { useState } from "react";
import Blog from "./blog";


const Home = () =>{

    let [blog,setblogs]   =  useState([
        {name:"dog",age:1,id:1 },
        {name:"cat",age:2,id:2},
         {name:"catmaw",age:2,id:2}
])


    return(
            <div>
          <Blog propsBlog={blog}  />
            </div>
    );
}

export default Home;