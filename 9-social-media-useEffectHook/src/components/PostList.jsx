import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcome";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

const PostList = () => {
    const { postList, addInitialPost } = useContext(postListData);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then((data) => {
                addInitialPost(data.posts)
                setFetching(false);
            });

        return () => {
            controller.abort(); // if we change page in between network call we abord that call
            console.log("Cleaning Log Effect");
        }
    }, []);

    return <>
        {fetching && <Loading />}
        {!fetching && postList.length == 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>

}
export default PostList;