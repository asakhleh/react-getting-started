import {useState} from 'react';
import {useHistory} from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("New Blog Added")
            setIsPending(false);
            history.push('/')

        })


    }


    return <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>blog title:</label>
            <input
                type="text"
                required 
                value={title}
                onChange={ (e) => setTitle(e.target.value) }
            />
            <label>Blog body:</label>
            <textarea
                required 
                value={body}
                onChange={ (e) => setBody(e.target.value) }
            />
            <label>Blog author:</label>
            <select 
                value={author}
                onChange={ (e) => setAuthor(e.target.value) }
                >
                <option value="mario">Mario</option>
                <option value="Ahmad">Ahmad</option>
            </select>
            {!isPending && <button>Add blog</button>}
            {isPending && <button>Adding blog ..</button>}


        </form>
    </div>
}

export default Create;