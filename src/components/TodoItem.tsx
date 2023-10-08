import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export default function TodoItem({item, onDelete, onUpdate }) {
const [isEdit, setEditable] = useState(false);
const [updatedTodo, editTodo] = useState(item.todo);

  return (
    <div>
    <Grid container spacing={3}>
        <br/>
        { !isEdit && (
        <Grid item xs={12}> 
            <p> {item.todo} </p> 
            <IconButton onClick={()=>{setEditable(true);}}>
                <EditIcon/>
            </IconButton>
            <IconButton onClick={()=>onDelete(item.id)}>
                <DeleteIcon/>
            </IconButton>
        </Grid> ) }
        { isEdit && (
        <Grid item xs={12}> 
        <TextField color="primary" label="Edit Todo" variant="outlined" name="EditTodo" value={updatedTodo} onChange={event => { editTodo(event.target.value)}}></TextField>
            <IconButton onClick={()=>{setEditable(false); onUpdate(item.id, updatedTodo);}}>
                <SaveIcon/>
            </IconButton>
            <IconButton onClick={()=>{setEditable(false);}}>
                <CancelIcon/>
            </IconButton>
        </Grid>)}
    </Grid>
    </div>
  )
}