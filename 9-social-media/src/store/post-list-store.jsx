import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deltePost: () => { },
});


const postlIstReducer = (currentPost, action) => {
    return currentPost;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postlIstReducer, DEFAULT_POST_LIST);
    const addPost = () => {

    };

    const deletePost = () => {

    };



    return <PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deltePost: deletePost
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