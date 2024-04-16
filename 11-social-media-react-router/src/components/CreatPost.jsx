import React, { useContext, useRef } from "react";
import { Form, redirect } from "react-router-dom";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
    const { addPost } = useContext(PostList);
    return (
        <Form method="POST" className="create-post">
            <div className="form-group">
                <label htmlFor="userId">userId</label>
                <input type="text" className="form-control" name="userId" id="userId" placeholder="Enter Your User_Id" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Post Title</label>
                <input type="text" className="form-control" name="title" id="title" placeholder="Write a Post..." />
            </div>
            <div className="form-group">
                <label htmlFor="body">Post Content</label>
                <textarea rows="4" className="form-control" name="body" id="body" placeholder="Tell Me More About it..." />
            </div>
            <div className="form-group">
                <label htmlFor="reaction">No Of reactions</label>
                <input type="number" className="form-control" id="reaction" name="reaction" placeholder="No Of Reaction" />
            </div>
            <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input type="text" className="form-control" id="tags" name="tags" placeholder="Please Enter Tags using space" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    );
};



export const createPostAction = async (data, addPost) => {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    }).then(res => res.json())
        .then(
            res => {
               console.log(post);
            }
        );

    return redirect("/");
}

export default CreatePost;
