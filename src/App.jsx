import React, { useState } from "react";
import Header from "./Header";
import Mainpage from "./Mainpage";
import "./scss/style.scss";
import SideBar from "./SideBar";

function App() {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false)
    const handleCollapseSidebar = () => setIsToggleSidebar(pre => !pre)
    return (
        <div className="App">
            <Header onToggleSidebar = {handleCollapseSidebar}/>
            <div className="main-body">
                <SideBar isToggleSidebar={isToggleSidebar}/>
                <Mainpage/>
            </div>
        </div>
    );
}

export default App;
