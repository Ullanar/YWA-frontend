import React from "react";
import {connect} from "react-redux";
import TaskManager from "./taskManagerLayer";
import TaskCard from "./taskCard";


function mapStateToProps(state) {
    return {
        tasks: state.taskManager.tasks
            .map(task => <TaskCard key={task.id} created={task.created}
                                   deadline={task.deadline} cardText={task.cardText}
                                   isComplete={task.isComplete} title={task.cardTitle}/>)
    }
}

let TaskManagerContainer = connect(mapStateToProps)(TaskManager)

export default TaskManagerContainer