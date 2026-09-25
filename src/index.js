import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable import/no-unresolved -- fontsource packages resolve via package exports */
import '@fontsource-variable/fraunces/opsz';
import '@fontsource-variable/fraunces/opsz-italic';
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono/400';
import '@fontsource/jetbrains-mono/500';
/* eslint-enable import/no-unresolved */
import App from './App';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
