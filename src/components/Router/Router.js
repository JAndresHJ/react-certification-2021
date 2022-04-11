import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SelectedVideo from '../../pages/SelectedVideo';
// import Header from '../Header';

// import useVideos from '../../hooks/useVideos';

const Router = () => {
  // const { search } = useVideos('wizeline');

  return (
    <>
      {/* <Header search={search} /> */}
      <BrowserRouter>
        <Switch>
          <Route component={SelectedVideo} path="/:id" exact />
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
