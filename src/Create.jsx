import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kotana');
    const [isPending, setIsPending] = useState(false);
    const history =  useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author}
      fetch('  http://localhost:8000/blogs', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(blog)
      } ).then(() => {
        console.log('new blog added');
        setIsPending(false);
        history.push('/');
      })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required  value={title} onChange={(e) =>
                    setTitle(e.target.value)
                } />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}> </textarea>
                <label>Blog Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Kotana</option>
                    <option value="yoshi">Allan</option>
                    </select>       
                   { !isPending && <button>Add Blog</button> }
                   { isPending && <button disabled>Add Blog ......</button> }
                   </form>
        </div>
     );
}
 
export default Create;