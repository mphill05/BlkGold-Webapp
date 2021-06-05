import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import HomePage from "./pages/homepage/homepage.component";
import MusicPage from "./pages/music/music.component";
import StorePage from "./pages/store/store.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  const TRACKING_ID = "UA-198818102-1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


  return (
    <div className="container">
      <Container fluid>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/store" component={StorePage} />
        </Switch>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
