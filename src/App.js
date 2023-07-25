import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import classes from './App.module.css';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

function App() {
  
  const todoItems = useSelector(state => state.task.todoItems) 
  const itemsAvailable = todoItems.length > 0

  return (
    <>
    <Typography variant="h3" align='left' gutterBottom>
        T O D O
    </Typography>    
    <TodoForm />
    <Grid container spacing={2}>
    <Grid item xs={12} className={itemsAvailable ? classes.list : ''}> <TodoList /></Grid>
    </Grid>
    
    
    </>    
  );
}

export default App;
