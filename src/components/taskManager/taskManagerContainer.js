import React from "react";
import {connect} from "react-redux";
import TaskManager from "./taskManagerLayer";
import TaskCard from "./taskCard";
import {addNewTask} from "../../redux/taskManagerReducer";


function mapStateToProps(state) {
    return {
        tasks: state.taskManager.tasks
            .map(task => <TaskCard key={task.id} created={task.created}
                                   deadline={task.deadline} cardText={task.cardText}
                                   isComplete={task.isComplete} title={task.cardTitle}/>)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createNewTask: (deadline, title, text) => dispatch(addNewTask(deadline, title, text))

    }
}

let TaskManagerContainer = connect(mapStateToProps, mapDispatchToProps)(TaskManager)

export default TaskManagerContainer