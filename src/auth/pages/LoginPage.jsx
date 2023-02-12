import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia';
import img from '../../assets/Image_Products.jpg'
import '../../styles/Login.css'

const LoginPage = () => {
  return(
    <div id='Login'>  
      <Grid container direction="row" height='100% !important'>
        <Box sx={{ width: '50%', height: '100% !important'}}>
          <Grid container direction="column" alignContent={'center'} justifyContent={'center'} minHeight={'1000px'} height={'100%'}>
              <h1>Login</h1>
              <form>
                <Stack spacing={4} sx={50} width={800}>
                  <TextField 
                    type="email" 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    color="info" 
                    required="true"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    required="true"
                  />
                  <Button variant="contained">Log in</Button>
                </Stack>
              </form>
            </Grid>
        </Box>
        <Box sx={{ width: '50%',  height: '100% !important', margin: '0px', padding: '0px'}}>
          <CardMedia
            component="img"
            height="100%"
            image={img}
            alt="Cleaning producs"
          />
        </Box>
      </Grid>
    </div>
  )
}

export default LoginPage