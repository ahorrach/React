import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, useFormControl } from '@mui/material';
import { ImageGallery } from '../components'
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setActiveNote } from '../../store/journal';


export const NoteView = () => {

    const dispatch = useDispatch();
   
    const {active:note} = useSelector( state => state.journal )
    const {body, tittle, date, onInputChange, formState } = useForm(note );

    const dateString = useMemo(() => {

        const newDate = new Date(date);

        return newDate.toUTCString();

        useEffect(() => {
            dispatch(setActiveNote())
        }, [formState])
        


    },[date])

  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name="tittle"
                value={ tittle }
                onChange={ onInputChange }
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name="body"
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}
