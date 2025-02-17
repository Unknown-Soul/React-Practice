import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import SideBar from "../src/components/SideBar";
import { useState } from "react";
import PostListProvider from "../src/store/post-list-store";
import { Outlet } from "react-router";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-continer">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>

  );
}

export default App;
