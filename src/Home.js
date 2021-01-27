import useFetch from './useFetch'
import BlogList from './BlogList'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:5000/blogs')

  return ( 
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <h3>Fetching data...</h3>}
      {data && <BlogList blogs={data} title='Cały blog'/>}
    </div>
   );
}
 
export default Home;