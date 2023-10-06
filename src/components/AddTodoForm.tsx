import { useState }  from 'react';
import {v4 as uuidv4} from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function AddTodoForm({AddTodoProp}) {
    const [todo, setTodo] = useState('');

    const addTodo = _ => {
        // call Add function provided by app.tsx
        AddTodoProp({id: uuidv4(), todo});

        // Reset text field to empty
        setTodo('');
    }

    return <Stack direction="row" spacing={2}>
                <TextField color="primary" label="Add Task" variant="outlined" name="AddTodo" value={todo} onChange={event => { setTodo(event.target.value)}}></TextField>
                <Button color="primary" variant='contained' onClick={addTodo}>Add Todo</Button>
            </Stack>
}