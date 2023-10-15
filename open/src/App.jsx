// PRUEBA console.log(import.meta.env.VITE_API_KEY)
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

// solicitud de url 
const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?id=${3171193}&appid=${import.meta.env.VITE_API_KEY}&q=`


export default function App() {
  // Estado
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  })

  const[ weather, setWeather ]= useState({
    city: "",
    county: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  })

  const onSubmit = async(evt) => {
    evt.preventDefault();
    console.log("submit");
    setLoading(true);
    try{
      if(!city.trim()) throw { message: "El campo de ciudad no se encuentra "};

      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();

      if(data.error) throw { message: data.error.message }
      // console.log(data)

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
      })
    }catch ( error ){
      console.log(error);
      setError({
        error: true,
        message: error.message,
      })
    }finally{
      setLoading(false)
    }
  };

  return (
    <Container maxWidth='xs' sx={{ mt: 2 }}>
      <Typography variant='h3' component='h3' align='center' gutterBottom>
        App de clima para Flow
      </Typography>
      <Box
        sx={{ display: "grid", gap: 2 }}
        component='form'
        autoComplete='off'
        onSubmit={onSubmit}>
        <TextField
          id='city'
          label='Pais'
          variant='outlined'
          size='small'
          required
          fullWidth
          value={city}
          onChange={(evt) => setCity(evt.target.value)}
          error={error.error}
          helperText={error.message}
        />

        <LoadingButton
          type='submit'
          variant='contained'
          loading={loading}
          loadingIndicator='Espere unos segundos..'>
          Buscar
        </LoadingButton>
      </Box>

      <Typography
        textAlign="center"
        sx={{ mt:2, fontSize: "18px"}}
      >
      Powered by:{" "}
      <a href="https://api.openweathermap.org" title="Api de clima">
        Derechos de Open Weather
      </a>


      </Typography>
    </Container>
  );
}
