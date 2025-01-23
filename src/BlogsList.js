import {Link} from 'react-router-dom'


const BlogsList = ({blogs, handleDelete}) => {

    return (
        <div className="blogs">
        {
            blogs.map((blog) => (
                <div className="blog-review" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`  } className="blog-link" > 
                    <h1>{blog.title}</h1>
                    <p className="blog-body" >{blog.body}</p>
                    <p className="blog-author" >Written By {blog.author}</p>

                    </Link>

                </div>


            ))
        }
    </div>
    );
}

export default BlogsList