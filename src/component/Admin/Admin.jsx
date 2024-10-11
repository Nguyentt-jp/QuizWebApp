import Sidebar from "./Sidebar";
import './admin.scss'
import {useState} from "react";
import {FaBars} from "react-icons/fa";

export default function Admin(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)}/>
                Content admin!
            </div>
        </div>
    )
}