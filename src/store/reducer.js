const ADD_TASK = 'ADD_TASK'
const DONE_TASK = 'DONE_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

const defaultState = {
    taskList: [],
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, taskList: [...state.taskList, action.payload] }
        case DONE_TASK:
            return {...state, taskList: [...state.taskList.map(task => task.id === action.payload ? {...task, done: !task.done} : task)]}
        case REMOVE_TASK:
            return {...state, taskList: [...state.taskList.filter(task => task.id !== action.payload)]}
        default:
            return state
    }
}

export const addTaskAction = (payload) => ({type: ADD_TASK, payload})
export const doneTaskAction = (payload) => ({type: DONE_TASK, payload})
export const removeTaskAction = (payload) => ({type: REMOVE_TASK, payload})