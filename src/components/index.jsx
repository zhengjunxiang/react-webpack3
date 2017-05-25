import React from 'react';
import HomeL from 'bundle-loader?lazy!./Home';
import AboutL from 'bundle-loader?lazy!./About';
import TopicsL from 'bundle-loader?lazy!./Topics';
import Bundle from './bundle';

const Home = () => (
  <Bundle load={HomeL}>
    {HomeLo => <HomeLo />}
  </Bundle>
);

const About = () => (
  <Bundle load={AboutL}>
    {AboutLo => <AboutLo />}
  </Bundle>
);

const Topics = (location) => (
  <Bundle load={TopicsL}>
    {TopicsLo => <TopicsLo match={location.match} />}
  </Bundle>
);

export {Home, About, Topics};
