//import { useState, useEffect  } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
  
  const Home = () => {
 const { data: blogs, isPending} = useFetch('http://localhost:8000/blogs')
    return (  
        <div className="home">
            { isPending && <div>Loading....</div>}
        {blogs && <Bloglist blogs={blogs} title="All Blogs!!!" />} 
   
        </div>
    );
}
 
export default Home;