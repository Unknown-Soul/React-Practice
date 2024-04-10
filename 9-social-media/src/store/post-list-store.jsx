import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deltePost: () => { },
});


const postlIstReducer = (currentPost, action) => {
    let newPostList = currentPost;
    if (action.type === "DELETE_POST") {
        newPostList = currentPost.filter(post => post.id !== action.payload.postId);
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postlIstReducer, DEFAULT_POST_LIST);
    const addPost = () => {

    };

    const deletePost = (postId) => {
        console.log(postId);
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });

    };



    return <PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost
    }}>{children}</PostList.Provider>

};

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going On Vacation",
        body: "Going TO Mumbai On Vacation",
        reaction: 2,
        hashTag: ["#vcation", "#mumbai", "#enjoying"],
        userId: "userId_1"
    },
    {
        id: "2",
        title: "Passed Exam",
        body: "passed graduated",
        reaction: 2,
        hashTag: ["#passed", "#maje", "#enjoying"],
        userId: "userId_2"
    }
];


export default PostListProvider;