const Blog = (props) =>{

const blog = props.propsBlog
return(
        <div>
        <span>
            {blog.map((blog)=>(


                <div className="blog-container" key={blog.id}>

                    <div>
                        <span>
                        My Pet type: { blog.name }
                        </span>
                    </div>
                    <div>
                        <span>
                       My Pet Age: { blog.age} 
                    </span>
                    </div>
                  
                    <button >Click</button>
                </div>
              
            ))}
        </span>
    </div>
);
}

export default Blog;