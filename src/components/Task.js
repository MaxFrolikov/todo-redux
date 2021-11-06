import './Task.css'

function Task({task, doneTask, removeTask}){
    return (
        <div key={task.id} className={task.done ? 'task task-done' : 'task'}>
            <div className= 'task-text'>
                {task.text}
            </div>
            <div className='task-marks'>
                <div className='task-check' onClick = {() => doneTask(task.id)}>
                    ✔️
                </div>
                <div className='task-delete' onClick={() => removeTask(task.id)}>
                    ♻️
                </div>
            </div>
        </div>
    )
}

export {Task}