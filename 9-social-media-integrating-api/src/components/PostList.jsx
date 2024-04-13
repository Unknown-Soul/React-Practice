import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcome";

const PostList = () => {
    const { postList, addInitialPost } = useContext(postListData);
    const fetchMessages = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => { addInitialPost(data.posts) });
    }
    return <>
        {postList.length == 0 && <WelcomeMessage onGetPostClick={fetchMessages}></WelcomeMessage>}
        {postList.map((post) => <Post key={post.id} post={post} />)}
    </>

}
export default PostList;