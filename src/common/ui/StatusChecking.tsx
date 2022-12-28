import React from 'react'
import { Grid, LinearProgress, Box } from '@mui/material';

export const StatusChecking = () => {
  return (
    <Grid container>
      <Grid container direction={'column'} justifyContent='space-around' alignItems={'center'}>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      </Grid>
    </Grid>
  )
}
