import { useHistory, useParams } from "react-router-dom"
import useFetch from "../useFetch"

const BlogDetails = () => {
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('https://final-react-blog-be.web.app/blogs/' + id);
    const history = useHistory();
  
    const handleClick = () => {
      fetch('https://final-react-blog-be.web.app/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      }) 
    }
    
    const handleEdit = () => {
      fetch('https://final-react-blog-be.web.app/blogs/' + blog.id, {
        method: 'PATCH',
        body: blog
      }).then(() => {
        history.push('/');
      }) 
    }
  
    return (
      <div className="blog-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={() => handleClick()}>Delete</button>
            {" "}
            <button onClick={() => handleEdit()}>Edit</button>
          </article>
        )}
      </div>
    );
  }
   
  export default BlogDetails;