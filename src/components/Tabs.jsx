import React, {useState} from "react";
import "../App.css";
import Home from "../assets/Home.svg";
import Activity from "../assets/Activity.svg";
import Explore from "../assets/Explore.svg";
import User from "../assets/User.svg";
import Post from "../assets/Post.svg";
import HomeClicked from "../assets/HomeClicked.svg";
import ExploreClicked from "../assets/ExploreClicked.svg";
import PostClicked from "../assets/PostClicked.svg";
import ActivityClicked from "../assets/ActivityClicked.svg";
import UserClicked from "../assets/UserClicked.svg";
import HomeTab from './HomeTab'
import ExploreTab from './ExploreTab'
import PostTab from './PostTab'
import ActivityTab from './ActivityTab'
import UserTab from './UserTab'

export default function Menu() {
    const [activeTab, setActiveTab] = useState("Home");
    const items = [
        { tab: "Home", icon: Home, clickedIcon: HomeClicked },
        { tab: "Explore", icon: Explore, clickedIcon: ExploreClicked },
        { tab: "Post", icon: Post, clickedIcon: PostClicked },
        { tab: "Activity", icon: Activity, clickedIcon: ActivityClicked },
        { tab: "User", icon: User, clickedIcon: UserClicked },
    ]
    return (
        <>
            <div className="outlet">
                {activeTab === "Home" ? <HomeTab /> 
                    : activeTab === "Explore" ? <ExploreTab />
                    : activeTab === "Post" ? <PostTab />
                    : activeTab === "Activity" ? <ActivityTab />
                    : <UserTab />
                }
            </div>
            <nav className="menu container">
                <ul className="row">
                    {items.map((item) => <li className="col" onClick={() => 
                        {setActiveTab(item.tab)}}><img src={activeTab === item.tab ? item.clickedIcon : item.icon} alt={item.tab} /></li>)}
                </ul>
            </nav>
        </>
    )
}