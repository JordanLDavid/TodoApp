import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function TodoItem({item, onDelete, onUpdate }) {
const [activity, setActivity] = useState(0);
const [updatedTodo, editTodo] = useState(item.todo);
const [todoWidth, setTodoWidth] = useState('0');
const [editTodoWidth, setEditTodoWidth] = useState('auto');

  return (
    <Stack direction="row" spacing={3}>
        <br/>
        <div hidden={activity!==0} style={{ width: todoWidth }}> 
            <p> {item.todo} </p> 
            <IconButton onClick={()=>{setActivity(1); setTodoWidth('0%'); setEditTodoWidth('100%')}}>
                <EditIcon/>
            </IconButton>
            <IconButton onClick={()=>onDelete(item.id)}>
                <DeleteIcon/>
            </IconButton>
        </div>
        <div hidden={activity!==1} style={{ width: editTodoWidth}}>
        <TextField color="primary" label="Edit Todo" variant="outlined" name="EditTodo" value={updatedTodo} onChange={event => { editTodo(event.target.value)}}></TextField>
            <IconButton onClick={()=>{setActivity(0); onUpdate(item.id, updatedTodo); setTodoWidth('100%'); setEditTodoWidth('0%')}}>
                <SaveIcon/>
            </IconButton>
            <IconButton onClick={()=>{setActivity(0); editTodo(item.todo); setTodoWidth('100%'); setEditTodoWidth('0%')}}>
                <CancelIcon/>
            </IconButton>
        </div>


    </Stack>
  )
}