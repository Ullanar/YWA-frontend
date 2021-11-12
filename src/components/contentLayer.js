import React from "react";
import LoginPage from "./Login/loginPage";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import TaskManagerContainer from "./taskManager/taskManagerContainer";


export default function ContentLayer() {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path ='/task_manager' element={<TaskManagerContainer/>}/>
            </Routes>
        </div>
    )
}