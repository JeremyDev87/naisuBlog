import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import './static/css/styles.css';
import App from './App';
import TopBar from './static/parts/nav.js';
import reportWebVitals from './reportWebVitals';
import Footer from './static/parts/footer.js';
import IntroDiv from './intro';
import PortfolioDiv from './portfolio';
import ShopDiv from './shop';
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
      <Route path="/naisuBlog/intro">
        <IntroDiv/>
      </Route>
      <Route path="/naisuBlog/portfolio">
        <PortfolioDiv/>
      </Route>
      <Route path="/naisuBlog/shop">
        <ShopDiv/>
      </Route>
      <Route path="/naisuBlog/naisuTV">
        <NaisuTVDiv/>
      </Route>
      <Route exact path="/naisuBlog/nanumicrew">
        <NanumiCrewDiv/>
      </Route>
      <Route path="/naisuBlog/nanumicrew/join">
        <NanumiSimpleDiv/>
        <NanumiJoin/>
      </Route>
      <Route path="/naisuBlog/nanumicrew/nanum">
        <NanumiSimpleDiv/>
        <NanumiNanum/>
      </Route>
      <Route path="/naisuBlog/nanumicrew/qna">
        <NanumiSimpleDiv/>
        <NanumiQna/>
      </Route>
      <Route path="/naisuBlog/blog">
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
