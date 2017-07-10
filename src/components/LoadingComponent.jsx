import React from 'react';

const MyLoadingComponent = ({error, pastDelay}) => {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};

export default MyLoadingComponent;
