import {useDispatch, useSelector} from 'react-redux'
import {Task} from './Task'
import { doneTaskAction, removeTaskAction } from '../store/reducer'

function TaskList (){    
    const dispatch = useDispatch()
    const taskList = useSelector(state => state.taskList)

    const doneTask = (id) => {
        dispatch(doneTaskAction(id))
    }

    const removeTask = (id) => {
        dispatch(removeTaskAction(id))
    }

    return (
        taskList.map(task => 
            <Task 
                task = {task}
                doneTask = {doneTask}
                removeTask = {removeTask}
            />
        )
    )
}

export {TaskList}