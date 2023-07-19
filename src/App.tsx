import React from 'react';
import Layout from "./UI/Laoyut/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import MoviesInfo from "./container/MoviesInfo/MoviesInfo";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={(
                  <Home/>
              )}/>
              <Route path="/shows" element={(<Home/>)}/>
              <Route path="/shows/:id" element={(<MoviesInfo/>)}/>
              <Route path="*" element={(
                  <h1>Not Found!</h1>
              )}/>
          </Routes>

      </Layout>
  );
}

export default App;
