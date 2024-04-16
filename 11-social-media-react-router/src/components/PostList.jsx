import Post from "./Post";
import WelcomeMessage from "./Welcome";
import { useLoaderData } from "react-router";

const PostList = () => {
    // const { postList } = useContext(postListData);
    const postList = useLoaderData();
    return <>
        {console.log(postList)}
        {/* {fetching && <Loading />} */}
        {postList.length == 0 && <WelcomeMessage />}
        {postList.map((post) => <Post key={post.id} post={post} />)}
    </>

}


// Define the postLoader function to fetch post data
export const postLoader = () => {
    return fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        {console.log(data)}
          return data.posts; // Return the array of posts
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        throw error; // Rethrow the error to be handled by React Router
      });
  };    
export default PostList;