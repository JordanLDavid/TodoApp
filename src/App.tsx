import { useEffect, useState } from 'react';
import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import {v4 as uuidv4} from 'uuid';
import Box from '@mui/material/Box'

const LOCAL_STORAGE_KEY = 'todokey';

export interface ITodo {
    id,
    todo: string;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  // load from local if available
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [todos, setTodos] = useState(storage !== null ? JSON.parse(storage) : []);

  function SaveToStorage() {
    // Save Data to Local Storage in JSON format
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }

  function AddTodo(todo:ITodo) {
    // Add new Todo to todo List
    setTodos([...todos, todo]); 
  }

  useEffect(() => {
    // save to storage when todos list is updated
    SaveToStorage();
  }, [todos])

  function DeleteTodo(id) {
    // Delete specified todo id
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  function UpdateTodo(id, newTodo:string) {
    // Find specified Id and update todo 
    setTodos(todos.map((editTodo) => {
        if (editTodo.id === id) {
          editTodo.todo = newTodo;
        }
        return editTodo;
      })
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <h1>Todo App</h1>
      <div className="card">
        <Box>
          <AddTodoForm AddTodoProp={AddTodo}/>
          <br/>
          <TodoList todos={todos} onDelete={DeleteTodo} onUpdate={UpdateTodo}/>
        </Box>
      </div>
      <p className='footer'>
        Created by Jordan Lenard David - 2023
      </p>
    </ThemeProvider>
  )
}

export default App