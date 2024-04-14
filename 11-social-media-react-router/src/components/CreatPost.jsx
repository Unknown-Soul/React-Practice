import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostList);
    const userId = useRef();
    const title = useRef();
    const body = useRef();
    const reaction = useRef();
    const tags = useRef();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const userIdValue = userId.current.value;
        const titleValue = title.current.value;
        const bodyValue = body.current.value;
        const reactionValue = reaction.current.value;
        const tagsValue = tags.current.value.split(/\s+/);
        // userId.current.value = "";
        // title.current.value = "";
        // body.current.value = "";
        // reaction.current.value = "";
        // tags.current.value = "";
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleValue,
                userId: userIdValue,
                body: bodyValue,
                reactions: reactionValue,
                tags: tagsValue
            })
        })
            .then(res => res.json())
            .then(res => addPost(res));
       // addPost(userIdValue, titleValue, bodyValue, reactionValue, tagsValue);
    }

    return (
        <form className="create-post" onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="userId">userId</label>
                <input type="text" className="form-control" ref={userId} id="userId" placeholder="Enter Your User_Id" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Post Title</label>
                <input type="text" className="form-control" ref={title} id="title" placeholder="Write a Post..." />
            </div>
            <div className="form-group">
                <label htmlFor="body">Post Content</label>
                <textarea rows="4" className="form-control" ref={body} id="body" placeholder="Tell Me More About it..." />
            </div>
            <div className="form-group">
                <label htmlFor="reaction">No Of reactions</label>
                <input type="number" className="form-control" id="reaction" ref={reaction} placeholder="No Of Reaction" />
            </div>
            <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input type="text" className="form-control" id="tags" ref={tags} placeholder="Please Enter Tags using space" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    );
};

export default CreatePost;
