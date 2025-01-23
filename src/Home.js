import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    const handleClick =(e) => {
        console.log("Hello, ahmad" );
    }

    const handleDelete = (id) => {
        //const newBlogs = data.filter((blog) => blog.id !== id)
       //setBlogs(newBlogs);
    }

    
    return (  
        <div className="home">
            {isPending && <div> Loading ... </div>}
            <h2>Homepage</h2>
            {error && <div> {error}</div>}
            {blogs && <BlogsList blogs={blogs} handleDelete={handleDelete}/>}
            <button onClick={(e) => {handleClick(e) }}> Change Name</button>

        </div>
    );
}
 
export default Home;