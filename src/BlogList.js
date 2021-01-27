import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title, handleDelete }) => {
  return ( 
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map(({id, title, author}) => (
        <div className="blog-preview" key={id}>
          <Link to={`/blogs/${id}`} >
            <h2>{title}</h2>
            <p>Written by {author}</p>
          </Link>
        </div>  
      ))}
    </div>
   );
}
 
export default BlogList;