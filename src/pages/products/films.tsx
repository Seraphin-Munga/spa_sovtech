import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Badge, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { IFilmsRetrievalModel } from '../../core/models/films-retrieval.model';
import "../products/films.scss";
import img from "../../assets/film.jpeg";
import { useHistory } from 'react-router-dom';


const FormRow = (props: any) => {

    const [getFilms, setFilms] = useState<IFilmsRetrievalModel>();
    const productState = useSelector((state: any) => state.films);
    const history = useHistory();

    useEffect(() => {
        setFilms(productState)
      },[props.props]);

    const viewBtn = (id: number)=> {
      history.push(`/film-detail/${id}`)
      
    }

  const renderProducts = getFilms?.results.map((item: any) => {
    return (
      <Grid key={item.episode_id} item xs={3}>
        <Card className="card" onClick={() => viewBtn(item.episode_id)} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {item.opening_crawl}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className='btn-view' onClick={() => viewBtn(item.episode_id)} size="small">
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return <React.Fragment>{renderProducts}</React.Fragment>;
};


const Films = (props:any) => {

  // console.log(props.match.params.searchTerm)
    return (
      <div className='container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid container item spacing={3}>
              <FormRow props={props.match.params.searchTerm} />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }

  export default Films;
