import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./client/Root', () => {
    render(Root);
  });
}
