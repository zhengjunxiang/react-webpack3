import React from 'react';
import {Route, Link} from 'react-router-dom';
import topicRoutes from '../routes/topicRoutes';
import Topic from './Topic';

const Topics = ({match}) => (
  <div>
    <h2>Topicsas</h2>
    <ul>
      {
        topicRoutes.map(item => (
          <li key={item.text}>
            <Link to={`${item.path}`}>
              {item.text}
            </Link>
          </li>
        ))
      }
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
      />
  </div>
);

export default Topics;
