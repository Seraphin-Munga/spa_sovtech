import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import {Provider} from "react-redux";
import  store from "../src/state/store"
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home/indext";
import Films from "./pages/products/films";
import FilmDetail from "./pages/products/film-detail";


function App() {
  return (
    <div className="App">
     
      <Router>
      <Provider store={store}>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route  path="/films/:searchTerm" component={Films}/>
            <Route  path="/film-detail/:id" component={FilmDetail}/>
          </Switch>
        </MainLayout>
        </Provider>
      </Router>
     
    </div>
  );
}

export default App;