import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { addTaskAction } from '../store/reducer'
import './Input.css'

function Input (){
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }  

    const task = {
        text: userInput,
        id: Date.now(),
        done: false
    }
    
    const addTask = () => {
        if(!userInput) return
        dispatch(addTaskAction(task))
        setUserInput('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (    
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                placeholder='Введи задачу...'
            />
            <button><b>Add</b></button>
        </form>
    )
}

export { Input }