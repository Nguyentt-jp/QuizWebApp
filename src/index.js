import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";
import store from './redux/store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./component/User/User";
import Admin from "./component/Admin/Admin";
import Home from "./component/Home/Home";
import ManagerUser from "./component/Admin/Content/ManagerUser";
import DashBoard from "./component/Admin/Content/DashBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index path="/" element={<Home/>} />
                    <Route path="user" element={<User/>} />
                </Route>
                <Route path="admins" element={<Admin/>}>
                    <Route index  element={<DashBoard/>} />
                    <Route path="manage-user" element={<ManagerUser/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>

  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
