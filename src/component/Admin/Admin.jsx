import Sidebar from "./Sidebar";
import './admin.scss'
import {useState} from "react";
import {FaBars} from "react-icons/fa";
import {Outlet} from "react-router-dom";

export default function Admin(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <div className="admin-content-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)}/>
                </div>
                <div className="admin-content-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}