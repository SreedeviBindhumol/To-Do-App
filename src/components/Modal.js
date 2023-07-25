import React, { useRef } from 'react';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { modalActions, taskActions } from '../store/index';
import { Fab, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const ModalEdit = (props) => {
    // console.log(props.task)

    const editedTitleRef = useRef()

    const dispatch = useDispatch();

    const submitHandler = (event) =>{
        event.preventDefault()    
        const newTitle = editedTitleRef.current.value
        console.log(newTitle)
        dispatch(taskActions.addTask({title: newTitle, id: props.task.id }))
        dispatch(modalActions.closeModal())
    }

    const closeModalHandler =() => {
        dispatch(modalActions.closeModal())
    }
 

    return (
        <React.Fragment>
        <div className={classes.backdrop}/>
        <form className={classes.modal} onSubmit={submitHandler}>           
                <header className={classes.header}>
                    <h2>Please edit your title.</h2>
                </header>                
                <div className={classes.content}>
                    <TextField variant='standard' type='text' placeholder='enter your title' defaultValue={props.task.title} inputRef={editedTitleRef}/>
                </div>
                <footer className={classes.actions}>
                    <Fab color='primary' size='small' type='submit'>
                    <CheckIcon />    
                    </Fab> 
                    <Fab color='error' size='small' onClick={closeModalHandler}>
                    <CloseIcon/>
                    </Fab>                    
                </footer>
        </form>       
        </React.Fragment>
    )
}

export default ModalEdit;