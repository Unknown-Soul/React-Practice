import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../routes/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { createPostAction } from "../src/components/CreatPost";
import PostList, { postLoader } from "../src/components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <PostList/>,loader: postLoader },
      { path: "/createPost", element: <CreatePost/>, action: createPostAction},
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
