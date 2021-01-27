import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('http://localhost:5000/blogs/' + id)
  const history = useHistory()

  const handleDelete = () => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  }
  
  return ( 
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <h3>Loading data</h3>}
      {blog && (
      <article>
        <h2>{blog.title} </h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleDelete}>delete</button>
      </article>
      )}
      
    </div>
   );
}
 
export default BlogDetails;