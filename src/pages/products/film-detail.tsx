import { Box, Grid } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { IFilmDetailModel } from "../../core/models/film-detail.model";
import CustomerResourceService from "../../core/services/film-resource-service";
import "../products/films.scss";

const _customerResourceService = CustomerResourceService;
const FilmDetail = (props: any) => {
  const [getFilm, setSingleFilm] = useState<IFilmDetailModel>();

  async function getSingleFilm(): Promise<void> {
    try {
      const film = await _customerResourceService.singleFilm(
        props.match.params.id
      );
      setSingleFilm(film);
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  const characters = getFilm?.characters.map((item) => {
    return <li key={item}>{item}</li>;
  });

  const vehicles = getFilm?.vehicles.map((item) => {
    return <li key={item}>{item}</li>;
  });


  const planets = getFilm?.planets.map((item) => {
    return <li key={item}>{item}</li>;
  });

  const species = getFilm?.species.map((item) => {
    return <li key={item}>{item}</li>;
  });

  useEffect(() => {
    getSingleFilm();
  }, []);

  return (
    <div className="container-detail">
      <h1>{getFilm?.title}</h1>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
        <ul>
          <h2>Character(s)</h2>
          {characters}
          </ul>
        </Grid>
        <Grid item xs={3}>
         <ul>
         <h2>Vihicle(s)</h2>
           {vehicles}
         </ul>
        </Grid>
        <Grid item xs={3}>
            <h2>Planet(s)</h2>
           <ul>
             {planets}
           </ul>
        </Grid>
        <Grid item xs={3}>
          <h1>Species</h1>
         <ul>
           {species}
         </ul>
        </Grid>
      </Grid>

 
    </div>
  );
};

export default FilmDetail;
