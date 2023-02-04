import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, TextField, Box } from "@mui/material";
import { Container } from "@mui/system";
import { ImageGallery } from "../ImageGallery";
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks.redux';
import { useForm } from '../../hooks/useForm';
import { updateNote } from "../../redux/slices/journal";
import { startSaveNote } from "../../redux/thunks/journal";

export const NoteView = () => {

  // it's not posible show NoteView without an active note
  const { active } = useAppSelector(state => state.journal);
  const dispatch = useAppDispatch();

  if (!active) throw new Error('does not exist an active note.');
  const { body, date, title } = active;

  // TODO: make a use form hook, remenber
  const { inputForm, onChange } = useForm({
    title,
    body
  });

  useEffect(() => {
    dispatch(updateNote(inputForm));
  }, [inputForm]);

  const onSave = () => {
    dispatch(startSaveNote());
  };

  return (
    <Container>
      <Grid
        container
        direction={"row"}
        spacing={2}
        width="100%"
        justifyContent={"center"}
        alignItems="center"
      >
        {/* Fecha y acciones */}
        <Grid item sm={6} xs={12}>
          {/* Formulario... */}
          <Box component={'form'} onSubmit={(e) => { console.log({ inputForm }); e.preventDefault(); }}>
            <Grid container justifyContent={"space-between"} alignItems="center">
              <Typography color={"primary.main"}>
                {new Date(date).toDateString()}
              </Typography>
              <Button type="submit" onClick={onSave} variant="contained">Save Note</Button>
            </Grid>
            <Grid container direction={"column"} mt={2}>
              <Grid item mb={".5em"}>
                <TextField
                  label="Titulo"
                  value={inputForm.title}
                  fullWidth
                  color="secondary"
                  placeholder="¿Cual es el título?"
                  name="title"
                  onChange={onChange}
                />
              </Grid>
              <Grid item mt={".5em"}>
                <TextField
                  label="Contenido"
                  value={inputForm.body}
                  fullWidth
                  color="secondary"
                  multiline
                  minRows={12}
                  placeholder="Que estas pensando?"
                  name="body"
                  onChange={onChange}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Imagenes... */}
        <Grid item xs={12} sm={6}>
          <ImageGallery />
        </Grid>
      </Grid>
    </Container>
  );
};
