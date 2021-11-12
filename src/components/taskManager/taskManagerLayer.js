import React from "react";
import CreateNewTaskWindow from "./createNewTask";
import TaskCard from "./taskCard";

export default function TaskManager(props) {
    return (
        <div>

            <CreateNewTaskWindow/>

            {props.tasks}
        </div>
    )
}