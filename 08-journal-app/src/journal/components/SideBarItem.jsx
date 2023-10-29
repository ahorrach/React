import { TurnedInNot } from "@mui/icons-material"
import { Grid,ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from '../../store/journal';


export const SidbarItem = ({ tittle = '', body, id, date, imageUrls= [] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch( setActiveNote({ tittle, body, id , date, imageUrls}) )
  }

  const newTitle = useMemo( () => {
    return tittle.length > 17
        ? tittle.substring(0,17) + '...'
        : tittle;
},[ tittle ])

  return (
    <ListItem  disablePadding>
    <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ newTitle } />
            <ListItemText secondary={ body } />
        </Grid>
    </ListItemButton>
</ListItem>
  )
}
