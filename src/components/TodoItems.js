import classes from './TodoItems.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, taskActions } from '../store/index';
import ModalEdit from './Modal';
import { Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItems = (props) => {

    const [isDone, setIsDone] = useState(false)
    const showModal = useSelector(state => state.modal.showModal)
    
    const todoItems = useSelector(state => state.task.todoItems) 
    const editedItem = useSelector(state => state.modal.editedItem) 

    const id = props.id;
    // console.log(id)
    
    const dispatch = useDispatch();

    const checkHandler =() => {
        setIsDone(prevState => !prevState)        
    }
    console.log(isDone)

    const editHandler = (event) =>{        
        
        console.log(event.currentTarget.value)
        const taskId = event.currentTarget.value;
        const todoItem = todoItems.find(task => task.id === taskId)
        console.log(todoItem)
        dispatch(modalActions.openModal(todoItem));
        
      }

    const deleteHandler = () =>{
        dispatch(taskActions.deleteTask(id))
        // console.log(id)
      }
    
    return (
        <>
        <Paper elevation={10}>
        <li className={classes.list}>
            {props.title}
            <div className={classes.button}>
            <Button style={isDone ? {backgroundColor:'rgb(53, 120, 214)', color: 'white'} : {}} onClick={checkHandler}>
                <CheckCircleOutlineIcon />
            </Button>
            <Button onClick={editHandler} value={props.id} disabled={isDone} >
                <EditIcon />
            </Button>
            <Button onClick={deleteHandler}>
                <DeleteIcon />
            </Button>            
            </div>
        </li>
        </Paper>
        {showModal && <ModalEdit task={editedItem}/>}
        </>
    )
}

export default TodoItems;