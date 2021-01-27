import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('miszke')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    setIsPending(true)
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false)
      history.push('/')
    })
    
  }

  return ( 
    <div className="create">
      <h2 className="title">Add new blog</h2>
        <form
          onSubmit={handleSubmit}
        >
          <label>Blog title:</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>
            Blog body:
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          >
          </textarea>
          <select name="" id=""
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <label>Bloga author: </label>
            <option value="miszke">miszke</option>
            <option value="basia">basia</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding blog...</button>}
          <h1>{ title }</h1>
          <p>author: { author }</p>
          <p>{ body }</p>
        </form>
    </div>
   );
}
 
export default Create;