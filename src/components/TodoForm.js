import classes from './TodoForm.module.css'
import {useState, useRef } from 'react';
import {useDispatch} from 'react-redux'
import { taskActions } from '../store/index';
import AddIcon from '@mui/icons-material/Add';
import { Button, Input, Typography } from '@mui/material';


const TodoForm = (props) => {

    const [error, setError] = useState(true)
    const [initial, setInitial] = useState(true)
    const inputRef = useRef();

    const dispatch = useDispatch()

    const todoSubmitHandler =(event) => {
        event.preventDefault(); 
          
        if(inputRef.current.value.trim().length > 0){
            setError(false)
            dispatch(taskActions.addTask({title: inputRef.current.value, id: Math.random().toString() }))
        }else{
            setError(true);
            setInitial(false)
        }
    }

    return(<>
        <form className={classes.form} onSubmit={todoSubmitHandler}>
        <Input type="text" variant="standard" placeholder='Enter your todos . . .' inputRef={inputRef}/>
        <Button variant="contained" type='submit' color="primary" data-testid="add" size="small">
        <AddIcon />
        </Button>
        
        </form>
        {error && !initial && <Typography variant='paragraph' color='error' data-testid="error">Please enter a valid value.</Typography>}
        </>       
    )
}

export default TodoForm;