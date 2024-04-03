import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatPost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-continer">
      <SideBar selectedTab={selectedTab}></SideBar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
