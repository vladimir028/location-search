import { Grid } from '@mui/material';
import './App.css'
import LocationSearch from "./components/LocationSearch.tsx";
import Map from "./components/Map.tsx";
import {useState} from "react";
import type {Place} from "./api/Place.ts";

function App() {

    const [place, setPlace] = useState<Place | null>(null);
  return (
      <Grid container spacing={10}>

          <Grid item xs={6} md={3} lg={3} minWidth={100} minHeight="1000px">
              <LocationSearch
                  onPlaceClick ={(p : Place) => setPlace(p)}
              />
          </Grid>
          <Grid item xs={6} md={9} lg={9}minWidth={100} minHeight="1000px">
              <Map
                place={place}
              />
          </Grid>
      </Grid>
  )
}

export default App
