import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
    const { postList, fetching } = useContext(postListData);
    return <>
        {fetching && <Loading />}
        {!fetching && postList.length == 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>

}
export default PostList;