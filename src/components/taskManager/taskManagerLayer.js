import React, {useEffect} from "react";
import CreateNewTaskWindow from "./createNewTask";
import TaskCard from "./taskCard";

export default function TaskManager(props) {

    useEffect(()=> {
    props.createNewTask('12.12.12', 'lol', 'EXTRA LOOOOOOOOOOL')
    }, [])

    return (
        <div>

            <CreateNewTaskWindow/>

            {props.tasks}
        </div>
    )
}