import { useState } from "react";
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
    if (action.type === "ADD_POST") {
        newPostList = [action.payload.post, ...currentPost]

    }
    if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postlIstReducer, DEFAULT_POST_LIST);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                post,
            }
        })
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
        deletePost: deletePost,
    }}>{children}</PostList.Provider>

};

const DEFAULT_POST_LIST = [
    // {
    //     id: "1",
    //     title: "Going On Vacation",
    //     body: "Going TO Mumbai On Vacation",
    //     reactions: 2,
    //     tags: ["#vcation", "#mumbai", "#enjoying"],
    //     userId: "userId_1"
    // },
    // {
    //     id: "2",
    //     title: "Passed Exam",
    //     body: "passed graduated",
    //     reactions: 2,
    //     tags: ["#passed", "#maje", "#enjoying"],
    //     userId: "userId_2"
    // }
];


export default PostListProvider;