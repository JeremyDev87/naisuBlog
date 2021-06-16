import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import TopBar from './static/parts/nav.js';
import reportWebVitals from './reportWebVitals';
import Footer from './static/parts/footer.js';
import IntroDiv from './intro';
import PortfolioDiv from './portfolio';
import NaisuTVDiv from './naisuTV';
import NanumiCrewDiv from './nanumicrew';
import NanumiSimpleDiv from './nanumiParts/nanumiSimple';
import NanumiJoin from './nanumiParts/join';
import NanumiNanum from './nanumiParts/nanum';
import NanumiQna from './nanumiParts/qna';
import BlogDiv from './blog';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopBar />
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/naisuBlog">
        <App />
      </Route>
      <Route exact path="/intro">
        <IntroDiv/>
      </Route>
      <Route exact path="/portfolio">
        <PortfolioDiv/>
      </Route>
      <Route exact path="/naisuTV">
        <NaisuTVDiv/>
      </Route>
      <Route exact path="/nanumicrew">
        <NanumiCrewDiv/>
      </Route>
      <Route exact path="/nanumicrew/join">
        <NanumiSimpleDiv/>
        <NanumiJoin/>
      </Route>
      <Route exact path="/nanumicrew/nanum">
        <NanumiSimpleDiv/>
        <NanumiNanum/>
      </Route>
      <Route exact path="/nanumicrew/qna">
        <NanumiSimpleDiv/>
        <NanumiQna/>
      </Route>
      <Route exact path="/blog">
        <BlogDiv/>
      </Route>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
